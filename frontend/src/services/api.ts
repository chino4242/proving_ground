import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api';

export interface RankResponse {
    rank_name: string;
    rank_level: string;
    description: string;
}

export const calculateRank = async (
    testId: string, 
    value: number, 
    age: number, 
    sex: string
  ): Promise<RankResponse> => {
    
 
    const response = await axios.post(`${API_URL}/calculate`, {
      test_id: testId,
      value: value,
      age: age,
      sex: sex
    });
  
    return response.data;
  };