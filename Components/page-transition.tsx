// 'use client';

// import { usePathname } from 'next/navigation';
// import { useEffect, useState, Suspense } from 'react';
// import Loading from './loading';

// export default function PageTransition({ children }: { children: React.ReactNode }) {
//   const pathname = usePathname();
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     // Show loading screen when route changes
//     setIsLoading(true);

//     // Set a timeout to hide loading after a brief moment
//     // This ensures loading only shows if the page takes time to load
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 100);

//     return () => clearTimeout(timer);
//   }, [pathname]);

//   useEffect(() => {
//     // Hide loading when page is fully loaded
//     setIsLoading(false);
//   }, [children]);

//   return (
//     <Suspense fallback={
//       <div className="fixed inset-0 z-9999">
//         <Loading />
//       </div>
//     }>
//       {isLoading && (
//         <div className="fixed inset-0 z-9999">
//           <Loading />
//         </div>
//       )}
//       {children}
//     </Suspense>
//   );
// }
