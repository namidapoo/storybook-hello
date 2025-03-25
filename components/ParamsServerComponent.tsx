import { FC } from 'react';

type ParamsServerComponentProps = {
  params: Promise<{
    slug?: string;
  }>;
  searchParams: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
};

const ParamsServerComponent: FC<ParamsServerComponentProps> = async ({
  params,
  searchParams
}) => {
  const paramsValue = await params;
  const searchParamsValue = await searchParams;

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg shadow-md border border-blue-100">
      <h2 className="text-xl font-bold text-blue-800 mb-4">サーバーコンポーネント</h2>
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-blue-700 mb-2">パスパラメータ:</h3>
        <pre className="bg-white p-3 rounded-md shadow-sm overflow-x-auto text-sm text-gray-800 border border-blue-200">
          {JSON.stringify(paramsValue, null, 2)}
        </pre>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-blue-700 mb-2">クエリパラメータ:</h3>
        <pre className="bg-white p-3 rounded-md shadow-sm overflow-x-auto text-sm text-gray-800 border border-blue-200">
          {JSON.stringify(searchParamsValue, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default ParamsServerComponent; 