import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/es/blog',
    component: ComponentCreator('/es/blog', '365'),
    exact: true
  },
  {
    path: '/es/blog/archive',
    component: ComponentCreator('/es/blog/archive', 'e43'),
    exact: true
  },
  {
    path: '/es/blog/first-blog-post',
    component: ComponentCreator('/es/blog/first-blog-post', '604'),
    exact: true
  },
  {
    path: '/es/blog/long-blog-post',
    component: ComponentCreator('/es/blog/long-blog-post', 'c63'),
    exact: true
  },
  {
    path: '/es/blog/mdx-blog-post',
    component: ComponentCreator('/es/blog/mdx-blog-post', 'b6a'),
    exact: true
  },
  {
    path: '/es/blog/tags',
    component: ComponentCreator('/es/blog/tags', '56b'),
    exact: true
  },
  {
    path: '/es/blog/tags/docusaurus',
    component: ComponentCreator('/es/blog/tags/docusaurus', 'b8b'),
    exact: true
  },
  {
    path: '/es/blog/tags/facebook',
    component: ComponentCreator('/es/blog/tags/facebook', '028'),
    exact: true
  },
  {
    path: '/es/blog/tags/hello',
    component: ComponentCreator('/es/blog/tags/hello', '017'),
    exact: true
  },
  {
    path: '/es/blog/tags/hola',
    component: ComponentCreator('/es/blog/tags/hola', '41f'),
    exact: true
  },
  {
    path: '/es/blog/welcome',
    component: ComponentCreator('/es/blog/welcome', '346'),
    exact: true
  },
  {
    path: '/es/markdown-page',
    component: ComponentCreator('/es/markdown-page', '9b0'),
    exact: true
  },
  {
    path: '/es/docs',
    component: ComponentCreator('/es/docs', 'b94'),
    routes: [
      {
        path: '/es/docs/category/country-specifications',
        component: ComponentCreator('/es/docs/category/country-specifications', '136'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/es/docs/category/deposits',
        component: ComponentCreator('/es/docs/category/deposits', '94e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/es/docs/category/documentation',
        component: ComponentCreator('/es/docs/category/documentation', '9a0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/es/docs/category/images-payment-methods',
        component: ComponentCreator('/es/docs/category/images-payment-methods', '9ba'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/es/docs/category/test-cards',
        component: ComponentCreator('/es/docs/category/test-cards', '348'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/es/docs/category/withdrawals',
        component: ComponentCreator('/es/docs/category/withdrawals', 'e67'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/es/docs/countrieSpecifications/paises_y_monedas',
        component: ComponentCreator('/es/docs/countrieSpecifications/paises_y_monedas', 'a28'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/es/docs/deposits/confirmationPayment',
        component: ComponentCreator('/es/docs/deposits/confirmationPayment', 'b47'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/es/docs/deposits/createPayment',
        component: ComponentCreator('/es/docs/deposits/createPayment', 'e9a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/es/docs/deposits/detailsPayment',
        component: ComponentCreator('/es/docs/deposits/detailsPayment', '7ec'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/es/docs/deposits/typesOfStatus',
        component: ComponentCreator('/es/docs/deposits/typesOfStatus', 'a1f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/es/docs/deposits/typesRejectPayment',
        component: ComponentCreator('/es/docs/deposits/typesRejectPayment', '45e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/es/docs/documentation/balance',
        component: ComponentCreator('/es/docs/documentation/balance', '7da'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/es/docs/documentation/knowapi',
        component: ComponentCreator('/es/docs/documentation/knowapi', 'ee7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/es/docs/documentation/paymentConsult',
        component: ComponentCreator('/es/docs/documentation/paymentConsult', '351'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/es/docs/documentation/paymentMethods',
        component: ComponentCreator('/es/docs/documentation/paymentMethods', '71a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/es/docs/documentation/previousDay',
        component: ComponentCreator('/es/docs/documentation/previousDay', 'd5b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/es/docs/documentation/statusSite',
        component: ComponentCreator('/es/docs/documentation/statusSite', '741'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/es/docs/documentation/withdrawalConsult',
        component: ComponentCreator('/es/docs/documentation/withdrawalConsult', '37e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/es/docs/intro',
        component: ComponentCreator('/es/docs/intro', '98b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/es/docs/paymentImageMethods/imageBanks',
        component: ComponentCreator('/es/docs/paymentImageMethods/imageBanks', 'f21'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/es/docs/testCards/webpay',
        component: ComponentCreator('/es/docs/testCards/webpay', '0cd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/es/docs/withdrawals/canceledWithdrawals',
        component: ComponentCreator('/es/docs/withdrawals/canceledWithdrawals', 'bd8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/es/docs/withdrawals/confirmationWithdrawal',
        component: ComponentCreator('/es/docs/withdrawals/confirmationWithdrawal', '249'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/es/docs/withdrawals/createWithdrawals',
        component: ComponentCreator('/es/docs/withdrawals/createWithdrawals', '5eb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/es/docs/withdrawals/detailsWithdrawal',
        component: ComponentCreator('/es/docs/withdrawals/detailsWithdrawal', '988'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/es/docs/withdrawals/statusWithdrawal',
        component: ComponentCreator('/es/docs/withdrawals/statusWithdrawal', '2f3'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/es/',
    component: ComponentCreator('/es/', '488'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
