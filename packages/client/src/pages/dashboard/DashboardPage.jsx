import React from 'react';

function DashboardPage() {
  React.useEffect(() => {
    console.log('DashboardPages mounted');
  }, []);
  return (
    <div>
      Dashboard Page
    </div>
  );
}

export default DashboardPage;
