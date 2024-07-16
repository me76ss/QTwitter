import React from "react";

const NotFound: React.FC = () => {
  return (
    <div dir="rtl">
      <div className="bg-secondary h-screen text-white p-20 text-center">
        <h1 className="text-3xl font-bold">404 - صفحه پیدا نشد</h1>
        <p className="mt-10">
          متاسفیم، اما صفحه ای که به دنبال آن هستید پیدا نشد.
        </p>
        <p className="mt-10">
          لطفاً آدرس خود را دوباره بررسی کنید یا به صفحه اصلی برگردید.
        </p>
        <div className="mt-10 text-red-500">
          <a href="/" className="btn hover:text-slate-400 btn-primary">
            بازگشت به صفحه اصلی
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;



// import React from "react";

// const NotFound = () => {
//   return <div>NotFound</div>;
// };

// export default NotFound;

// import React from 'react';
// import { useTheme } from '@emotion/react';

// const NotFound: React.FC = () => {
//   const theme = useTheme();

//   return (
//     <div
//       style={{
//         backgroundColor: theme.palette.primary,
//         color: theme.palette.text,
//         padding: 20,
//         textAlign: 'center',
//       }}
//     >
//       <h1>404 - صفحه پیدا نشد</h1>
//       <p>
//         متاسفیم، اما صفحه ای که به دنبال آن هستید پیدا نشد.
//       </p>
//       <p>
//         لطفاً آدرس خود را دوباره بررسی کنید یا به صفحه اصلی برگردید.
//       </p>
//       <a href="/">بازگشت به صفحه اصلی</a>
//     </div>
//   );
// };

// export default NotFound;

