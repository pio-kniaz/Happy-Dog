import { useEffect } from 'react';

function DashboardPage() {
  useEffect(() => {
    console.log('DashboardPages mounted');
  }, []);
  return (
    <div>
      Dashboard Page
    </div>
  );
}

export default DashboardPage;
