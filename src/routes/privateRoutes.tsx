import { lazy } from 'react';

const FormLaporanKerusakan = lazy(() => import('../pages/laporanKerusakan'));
const DemoScreen = lazy(() => import('../pages/demo/DemoScreen'));
const Dashboard = lazy(() => import('../pages/dashboard'));
const ShoppingCart = lazy(() => import('../pages/cart/index'));
const DynamicForm = lazy(() => import('../pages/dynamicSkillForm/index'));
const FeedbackForm = lazy(() => import('../pages/feedbackForm/index'));
const CommentForm = lazy(() => import('../pages/commentForm/index'));
const UploadFormWithMock = lazy(() => import('../pages/uploadForm/index'));
const Student = lazy(() => import('../pages/student/index'));
const VirtualizedMuiChat = lazy(() => import('../pages/virtualizeChat/index'));
const MessageWithTimestamp = lazy(() => import('../pages/message/index'));
const BuggyComponent = lazy(() => import('../pages/buggy/index'));

export const privateRoutes = [
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/laporan-kerusakan',
    element: <FormLaporanKerusakan />,
  },
  {
    path: '/demo',
    element: <DemoScreen />,
  },
  {
    path: '/shopping-cart',
    element: <ShoppingCart />,
  },
  {
    path: '/dynamic-form',
    element: <DynamicForm />,
  },
  {
    path: '/feedback-form',
    element: <FeedbackForm />,
  },
  {
    path: '/comment-form',
    element: <CommentForm />,
  },
  {
    path: '/upload-form',
    element: <UploadFormWithMock />,
  },
  {
    path: '/student',
    element: <Student />,
  },
  {
    path: '/virtualize-chat',
    element: <VirtualizedMuiChat />,
  },
  {
    path: '/message',
    element: <MessageWithTimestamp />,
  },
  {
    path: '/buggy',
    element: <BuggyComponent />,
  },
];
