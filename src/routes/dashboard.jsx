import { lazy } from 'react'; // CUSTOM COMPONENTS

import Loadable from './Loadable';
import { AuthGuard } from '@/components/auth';
import useSettings from '@/hooks/useSettings';
import LayoutV1 from '@/layouts/layout-1';
import LayoutV2 from '@/layouts/layout-2'; // ALL DASHBOARD PAGES

const CRM = Loadable(lazy(() => import('@/pages/dashboard/crm')));
const CRMV2 = Loadable(lazy(() => import('@/pages/dashboard/crm-2')));
const Sales = Loadable(lazy(() => import('@/pages/dashboard/sales')));
const SalesV2 = Loadable(lazy(() => import('@/pages/dashboard/sales-2')));
const Finance = Loadable(lazy(() => import('@/pages/dashboard/finance')));
const FinanceV2 = Loadable(lazy(() => import('@/pages/dashboard/finance-2')));
const Analytics = Loadable(lazy(() => import('@/pages/dashboard/analytics')));
const AnalyticsV2 = Loadable(lazy(() => import('@/pages/dashboard/analytics-2')));
const Ecommerce = Loadable(lazy(() => import('@/pages/dashboard/ecommerce')));
const Logistics = Loadable(lazy(() => import('@/pages/dashboard/logistics')));
const Marketing = Loadable(lazy(() => import('@/pages/dashboard/marketing')));
const LMS = Loadable(lazy(() => import('@/pages/dashboard/learning-management')));
const JobManagement = Loadable(lazy(() => import('@/pages/dashboard/job-management'))); // USER LIST PAGES

const AddNewUser = Loadable(lazy(() => import('@/pages/dashboard/users/add-new-user')));
const UserListView = Loadable(lazy(() => import('@/pages/dashboard/users/user-list-1')));
const UserGridView = Loadable(lazy(() => import('@/pages/dashboard/users/user-grid-1')));
const UserListView2 = Loadable(lazy(() => import('@/pages/dashboard/users/user-list-2')));
const UserGridView2 = Loadable(lazy(() => import('@/pages/dashboard/users/user-grid-2'))); // USER ACCOUNT PAGE

const Account = Loadable(lazy(() => import('@/pages/dashboard/accounts'))); // ALL INVOICE RELATED PAGES

const InvoiceList = Loadable(lazy(() => import('@/pages/dashboard/invoice/list')));
const InvoiceCreate = Loadable(lazy(() => import('@/pages/dashboard/invoice/create')));
const InvoiceDetails = Loadable(lazy(() => import('@/pages/dashboard/invoice/details'))); // PRODUCT RELATED PAGES

const ProductList = Loadable(lazy(() => import('@/pages/dashboard/products/list')));
const ProductGrid = Loadable(lazy(() => import('@/pages/dashboard/products/grid')));
const ProductCreate = Loadable(lazy(() => import('@/pages/dashboard/products/create')));
const ProductDetails = Loadable(lazy(() => import('@/pages/dashboard/products/details'))); // E-COMMERCE RELATED PAGES

const Cart = Loadable(lazy(() => import('@/pages/dashboard/ecommerce/cart')));
const Payment = Loadable(lazy(() => import('@/pages/dashboard/ecommerce/payment')));
const BillingAddress = Loadable(lazy(() => import('@/pages/dashboard/ecommerce/billing-address')));
const PaymentComplete = Loadable(lazy(() => import('@/pages/dashboard/ecommerce/payment-complete'))); // USER PROFILE PAGE

const Profile = Loadable(lazy(() => import('@/pages/dashboard/profile'))); // REACT DATA TABLE PAGE

const DataTable1 = Loadable(lazy(() => import('@/pages/dashboard/data-tables/table-1'))); // OTHER BUSINESS RELATED PAGES

const Career = Loadable(lazy(() => import('@/pages/career/career-1')));
const About = Loadable(lazy(() => import('@/pages/about-us/about-us-2')));
const FileManager = Loadable(lazy(() => import('@/pages/dashboard/file-manager'))); // SUPPORT RELATED PAGES

const Support = Loadable(lazy(() => import('@/pages/dashboard/support/support')));
const CreateTicket = Loadable(lazy(() => import('@/pages/dashboard/support/create-ticket'))); // CHAT PAGE

const Chat = Loadable(lazy(() => import('@/pages/dashboard/chat'))); // USER TODO LIST PAGE

const TodoList = Loadable(lazy(() => import('@/pages/dashboard/todo-list'))); // MAIL RELATED PAGES

const Sent = Loadable(lazy(() => import('@/pages/dashboard/email/sent')));
const AllMail = Loadable(lazy(() => import('@/pages/dashboard/email/all')));
const Inbox = Loadable(lazy(() => import('@/pages/dashboard/email/inbox')));
const Compose = Loadable(lazy(() => import('@/pages/dashboard/email/compose')));
const MailDetails = Loadable(lazy(() => import('@/pages/dashboard/email/details'))); //  PROJECT PAGES

const ProjectV1 = Loadable(lazy(() => import('@/pages/dashboard/projects/version-1')));
const ProjectV2 = Loadable(lazy(() => import('@/pages/dashboard/projects/version-2')));
const ProjectV3 = Loadable(lazy(() => import('@/pages/dashboard/projects/version-3')));
const ProjectDetails = Loadable(lazy(() => import('@/pages/dashboard/projects/details')));
const TeamMember = Loadable(lazy(() => import('@/pages/dashboard/projects/team-member')));

import Weather from '@/page-sections/apis/weather/Weather';
import Pokemon from '@/page-sections/apis/pokemon/Pokemon';
const JsonPlaceholder = lazy(() => import("../page-sections/apis/jsonplaceholder/JsonPlaceholder"));
import ErrorBoundary from '../components/ErrorBoundary';

const ActiveLayout = () => {
  const {
    settings
  } = useSettings();
  return settings.activeLayout === 'layout2' ? <LayoutV2 /> : <LayoutV1 />;
};

export const DashboardRoutes = [{
  path: 'dashboard',
  element: <AuthGuard>
        <ActiveLayout />
      </AuthGuard>,
  errorElement: <ErrorBoundary />,
  children: [{
    index: true,
    element: <Analytics />,
    errorElement: <ErrorBoundary />
  }, {
    path: 'crm',
    element: <CRM />,
    errorElement: <ErrorBoundary />
  }, {
    path: 'crm-2',
    element: <CRMV2 />,
    errorElement: <ErrorBoundary />
  }, {
    path: 'sales',
    element: <Sales />,
    errorElement: <ErrorBoundary />
  }, {
    path: 'sales-2',
    element: <SalesV2 />,
    errorElement: <ErrorBoundary />
  }, {
    path: 'finance',
    element: <Finance />,
    errorElement: <ErrorBoundary />
  }, {
    path: 'finance-2',
    element: <FinanceV2 />,
    errorElement: <ErrorBoundary />
  }, {
    path: 'ecommerce',
    element: <Ecommerce />,
    errorElement: <ErrorBoundary />
  }, {
    path: 'logistics',
    element: <Logistics />,
    errorElement: <ErrorBoundary />
  }, {
    path: 'marketing',
    element: <Marketing />,
    errorElement: <ErrorBoundary />
  }, {
    path: 'analytics-2',
    element: <AnalyticsV2 />,
    errorElement: <ErrorBoundary />
  }, {
    path: 'learning-management',
    element: <LMS />,
    errorElement: <ErrorBoundary />
  }, {
    path: 'job-management',
    element: <JobManagement />,
    errorElement: <ErrorBoundary />
  }, {
    path: 'add-user',
    element: <AddNewUser />,
    errorElement: <ErrorBoundary />
  }, {
    path: 'user-list',
    element: <UserListView />,
    errorElement: <ErrorBoundary />
  }, {
    path: 'user-grid',
    element: <UserGridView />,
    errorElement: <ErrorBoundary />
  }, {
    path: 'user-list-2',
    element: <UserListView2 />,
    errorElement: <ErrorBoundary />
  }, {
    path: 'user-grid-2',
    element: <UserGridView2 />,
    errorElement: <ErrorBoundary />
  }, {
    path: 'account',
    element: <Account />,
    errorElement: <ErrorBoundary />
  }, {
    path: 'invoice-list',
    element: <InvoiceList />,
    errorElement: <ErrorBoundary />
  }, {
    path: 'create-invoice',
    element: <InvoiceCreate />,
    errorElement: <ErrorBoundary />
  }, {
    path: 'invoice-details',
    element: <InvoiceDetails />,
    errorElement: <ErrorBoundary />
  }, {
    path: 'product-list',
    element: <ProductList />,
    errorElement: <ErrorBoundary />
  }, {
    path: 'product-grid',
    element: <ProductGrid />,
    errorElement: <ErrorBoundary />
  }, {
    path: 'create-product',
    element: <ProductCreate />,
    errorElement: <ErrorBoundary />
  }, {
    path: 'product-details',
    element: <ProductDetails />,
    errorElement: <ErrorBoundary />
  }, {
    path: 'cart',
    element: <Cart />,
    errorElement: <ErrorBoundary />
  }, {
    path: 'payment',
    element: <Payment />,
    errorElement: <ErrorBoundary />
  }, {
    path: 'billing-address',
    element: <BillingAddress />,
    errorElement: <ErrorBoundary />
  }, {
    path: 'payment-complete',
    element: <PaymentComplete />,
    errorElement: <ErrorBoundary />
  }, {
    path: 'profile',
    element: <Profile />,
    errorElement: <ErrorBoundary />
  }, {
    path: 'data-table-1',
    element: <DataTable1 />,
    errorElement: <ErrorBoundary />
  }, {
    path: 'about',
    element: <About />,
    errorElement: <ErrorBoundary />
  }, {
    path: 'career',
    element: <Career />,
    errorElement: <ErrorBoundary />
  }, {
    path: 'file-manager',
    element: <FileManager />,
    errorElement: <ErrorBoundary />
  }, {
    path: 'support',
    element: <Support />,
    errorElement: <ErrorBoundary />
  }, {
    path: 'create-ticket',
    element: <CreateTicket />,
    errorElement: <ErrorBoundary />
  }, {
    path: 'chat',
    element: <Chat />,
    errorElement: <ErrorBoundary />
  }, {
    path: 'todo-list',
    element: <TodoList />,
    errorElement: <ErrorBoundary />
  }, {
    path: 'mail',
    children: [{
      path: 'all',
      element: <AllMail />,
      errorElement: <ErrorBoundary />
    }, {
      path: 'inbox',
      element: <Inbox />,
      errorElement: <ErrorBoundary />
    }, {
      path: 'sent',
      element: <Sent />,
      errorElement: <ErrorBoundary />
    }, {
      path: 'compose',
      element: <Compose />,
      errorElement: <ErrorBoundary />
    }, {
      path: 'details',
      element: <MailDetails />,
      errorElement: <ErrorBoundary />
    }]
  }, {
    path: 'projects',
    children: [{
      path: 'version-1',
      element: <ProjectV1 />,
      errorElement: <ErrorBoundary />
    }, {
      path: 'version-2',
      element: <ProjectV2 />,
      errorElement: <ErrorBoundary />
    }, {
      path: 'version-3',
      element: <ProjectV3 />,
      errorElement: <ErrorBoundary />
    }, {
      path: 'details',
      element: <ProjectDetails />,
      errorElement: <ErrorBoundary />
    }, {
      path: 'team-member',
      element: <TeamMember />,
      errorElement: <ErrorBoundary />
    }]
  }, {
    path: 'weather',
    element: <Weather />,
    errorElement: <ErrorBoundary />
  }, {
    path: 'pokemon',
    element: <Pokemon />,
    errorElement: <ErrorBoundary />
  },
  {
    path: 'jsonplaceholder',
    element: <JsonPlaceholder />,
    errorElement: <ErrorBoundary />
  },
  ]
}];