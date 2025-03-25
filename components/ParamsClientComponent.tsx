'use client';

import { FC } from 'react';
import { useParams, usePathname, useSearchParams } from 'next/navigation';

const ParamsClientComponent: FC = () => {
  const params = useParams();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  // searchParamsをオブジェクトに変換
  const searchParamsObj = Object.fromEntries(searchParams.entries());

  return (
    <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-lg shadow-md border border-pink-100">
      <h2 className="text-xl font-bold text-rose-800 mb-4">クライアントコンポーネント</h2>
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-rose-700 mb-2">params:</h3>
        <pre className="bg-white p-3 rounded-md shadow-sm overflow-x-auto text-sm text-gray-800 border border-pink-200">
          {JSON.stringify(params, null, 2)}
        </pre>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-rose-700 mb-2">pathname:</h3>
        <pre className="bg-white p-3 rounded-md shadow-sm overflow-x-auto text-sm text-gray-800 border border-pink-200">
          {JSON.stringify(pathname, null, 2)}
        </pre>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-rose-700 mb-2">searchParams:</h3>
        <pre className="bg-white p-3 rounded-md shadow-sm overflow-x-auto text-sm text-gray-800 border border-pink-200">
          {JSON.stringify(searchParamsObj, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default ParamsClientComponent;
