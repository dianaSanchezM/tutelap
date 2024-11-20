// pages/success.tsx
import { useRouter } from 'next/router';

const Success = () => {
  const router = useRouter();
  const { action } = router.query; // 'action' will hold the value passed when redirected

  const getMessage = () => {
    switch (action) {
      case 'create':
        return 'La tutela ha sido creada con éxito.';
      case 'edit':
        return 'La tutela ha sido actualizada con éxito.';
      case 'delete':
        return 'La tutela ha sido eliminada con éxito.';
      default:
        return 'Operación completada con éxito.';
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f5f5dc]">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">{getMessage()}</h1>
      <div className="space-x-4">
        {action!== 'delete' && <button
          onClick={() => router.push('/tutela')}
          className="bg-gray-800 text-white py-2 px-4 rounded-md shadow hover:bg-gray-900 focus:outline-none"
        >
          Consultar Tutela
        </button>}
        <button
          onClick={() => router.push('/')}
          className="bg-gray-800 text-white py-2 px-4 rounded-md shadow hover:bg-gray-900 focus:outline-none"
        >
          Ir a Home
        </button>
      </div>
    </div>
  );
};

export default Success;
