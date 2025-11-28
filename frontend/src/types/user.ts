export interface PerformanceLogEntry {
    exercise_id: string;
    date: string;
    value: number;
    unit: string;
    bodyweight_at_time: number;
}

export interface User {
    username: string;
    age: number;
    sex: 'male' | 'female';
    current_bodyweight: number;
    selected_theme: string;

    performance_log: PerformanceLogEntry[];
}

