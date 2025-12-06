# build.ps1

$DeployFolder = ".\deployment-package"
$ZipFile = ".\lambda_deploy.zip"

Write-Host "STEP 1: Cleaning up old builds..." -ForegroundColor Cyan
if (Test-Path $DeployFolder) { Remove-Item -Recurse -Force $DeployFolder }
if (Test-Path $ZipFile) { Remove-Item -Force $ZipFile }

Write-Host "STEP 2: Creating new deployment directory..." -ForegroundColor Cyan
New-Item -ItemType Directory -Path $DeployFolder | Out-Null

Write-Host "⬇STEP 3: Installing Linux-compatible Python 3.9 libs..." -ForegroundColor Cyan
# This is the "magic" command that forces Linux binaries on Windows
pip install -r requirements.txt `
    --platform manylinux2014_x86_64 `
    --target $DeployFolder `
    --implementation cp `
    --python-version 3.9 `
    --only-binary=:all: `
    --upgrade

Write-Host "📄 STEP 4: Copying App Code..." -ForegroundColor Cyan
Copy-Item -Path ".\app" -Destination "$DeployFolder\app" -Recurse

Write-Host "STEP 5: Zipping it up..." -ForegroundColor Cyan
# We zip the CONTENTS of the folder, not the folder itself
Compress-Archive -Path "$DeployFolder\*" -DestinationPath $ZipFile -Force

Write-Host "SUCCESS! Ready to upload: $ZipFile" -ForegroundColor Green