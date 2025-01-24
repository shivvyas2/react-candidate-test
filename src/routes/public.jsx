import { lazy } from 'react';
import Loadable from './Loadable';
import { Outlet } from 'react-router-dom';
import RootLayout from '@/layouts/root/RootLayout';

// PAGES
const Landing = Loadable(lazy(() => import('@/pages/landing')));
const AboutUsOne = Loadable(lazy(() => import('@/pages/about-us/about-us-1')));
const ContactUs = Loadable(lazy(() => import('@/pages/contact-us')));
const Faqs = Loadable(lazy(() => import('@/pages/faq')));
const Pricing = Loadable(lazy(() => import('@/pages/pricing')));
const Cart = Loadable(lazy(() => import('@/pages/cart')));
const Checkout = Loadable(lazy(() => import('@/pages/checkout')));
const CareerTwo = Loadable(lazy(() => import('@/pages/career/career-2')));
const CareerDetails = Loadable(lazy(() => import('@/pages/career/details')));
const CareerApply = Loadable(lazy(() => import('@/pages/career/apply')));
const Products = Loadable(lazy(() => import('@/pages/shops/products')));
const ProductDetails = Loadable(lazy(() => import('@/pages/shops/product-details')));
const Permission = Loadable(lazy(() => import('@/pages/permission')));
const Maintenance = Loadable(lazy(() => import('@/pages/maintenance')));
const ComingSoon = Loadable(lazy(() => import('@/pages/coming-soon')));

// FEATURES PAGES
const GitHubUsers = Loadable(lazy(() => import('@/pages/features/github-users')));
const Posts = Loadable(lazy(() => import('@/pages/features/posts')));
const Weather = Loadable(lazy(() => import('@/pages/features/weather')));

export const PublicRoutes = [
  {
    path: '/',
    element: <Landing />
  },
  {
    path: '/features/github-users',
    element: <GitHubUsers />
  },
  {
    path: '/features/posts',
    element: <Posts />
  },
  {
    path: '/features/weather',
    element: <Weather />
  },
  {
    path: 'permission',
    element: <Permission />
  },
  {
    path: 'maintenance',
    element: <Maintenance />
  },
  {
    path: 'coming-soon',
    element: <ComingSoon />
  },
  {
    element: <RootLayout><Outlet /></RootLayout>,
    children: [
      {
        path: 'about-us',
        element: <AboutUsOne />
      },
      {
        path: 'contact-us',
        element: <ContactUs />
      },
      {
        path: 'faqs',
        element: <Faqs />
      },
      {
        path: 'pricing',
        element: <Pricing />
      },
      {
        path: 'cart',
        element: <Cart />
      },
      {
        path: 'checkout',
        element: <Checkout />
      },
      {
        path: 'career',
        children: [
          {
            index: true,
            element: <CareerTwo />
          },
          {
            path: ':slug',
            element: <CareerDetails />
          },
          {
            path: 'apply',
            element: <CareerApply />
          }
        ]
      },
      {
        path: 'products',
        children: [
          {
            index: true,
            element: <Products />
          },
          {
            path: ':id',
            element: <ProductDetails />
          }
        ]
      }
    ]
  }
];