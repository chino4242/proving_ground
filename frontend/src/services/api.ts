import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api';

export interface RankResponse {
    rank_name: string;
    rank_level: string;
    description: string;
}

export const calculateRank = async (
    exerciseId: string, 
    value: number, 
    age: number, 
    sex: string,
    bodyweight: number

  ): Promise<RankResponse> => {
    
 
    const response = await axios.post(`${API_URL}/calculate`, {
      exercise_id: exerciseId,
      value: value,
      age: age,
      sex: sex,
      bodyweight: Number(bodyweight)
    });
  
    return response.data;
  };