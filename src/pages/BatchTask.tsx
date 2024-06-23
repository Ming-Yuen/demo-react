import React, { useEffect, useState } from 'react'
import { httpPost } from '../common/api';
import { BatchTaskResponse } from '../services/BatchTaskResponse';

export default function BatchTask() {
  let initialRender = false;
  const [initialData, setInitialData] = useState<BatchTaskResponse[]>([]);
  useEffect(() => {
    if (!initialRender) {
      onLoad();
    }

    return () => {
      initialRender = true;
    };
  }, []);
  async function onLoad() {
    try {
      const response = await httpPost(process.env.REACT_APP_MENU_DEFAULT_QUERY!);
      console.log(response!.data.menu);
      setInitialData(response!.data.menu);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      
    </div>
  )
}
