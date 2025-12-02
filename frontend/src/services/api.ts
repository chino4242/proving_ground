import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL;

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

    console.log("🚀 Requesting:", `${BASE_URL}/calculate`);

 
    const response = await axios.post(`${BASE_URL}/calculate`, {
      exercise_id: exerciseId,
      value: value,
      age: age,
      sex: sex,
      bodyweight: Number(bodyweight)
    });
  
    return response.data;
  };