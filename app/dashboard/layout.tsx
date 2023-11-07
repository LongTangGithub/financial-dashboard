import SideNav from '@/app/ui/dashboard/sidenav';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      {/* The layout component receives a children prop. The child can either be a page or another layout */}
      {/* In your case, the pages inside /dashboard will automatically be nested inside a Layout like so: */}
      {/* One benefit of using layout is that on navigation, only the page components update while the layout won't re-render. In Next.js, this is called partial rendering: */}
      {/* Since the new layout you've just created (/app/dashboard/layout.tsx) is unique to the dashboard pages, you don't need to add any UI to the root layout above */}
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
        {children}
      </div>
    </div>
  );
}