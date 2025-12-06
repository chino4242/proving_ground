// src/services/api.ts

// 1. Get the Environment Variable
// Ensure your .env file has VITE_API_URL=http://localhost:8000 (NO trailing slash)
const API_BASE_URL = import.meta.env.VITE_API_URL;

export interface RankResponse {
  rank_level: string;
  description: string;
  // Add other fields if needed based on your backend response
}

export const calculateRank = async (
  exerciseId: string, 
  value: number, 
  age: number, 
  sex: string, 
  bodyweight: number
): Promise<RankResponse> => {
  
  // 2. CONSTRUCT THE URL
  // We explicitly add "/api/calculate" here.
  const url = `${API_BASE_URL}/api/calculate`;

  console.log(`🚀 Requesting: ${url}`);

  // 3. USE FETCH (Removes Axios dependency issues)
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      exercise_id: exerciseId,
      value: value,
      age: age,
      sex: sex,
      bodyweight: bodyweight
    }),
  });

  if (!response.ok) {
    // This helps debug if the backend throws a 422 or 500 error
    const errorText = await response.text();
    throw new Error(`Backend error (${response.status}): ${errorText}`);
  }

  return response.json();
};