import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './layout/Layout';
import { FrontPage } from './pages/Frontpage/Frontpage';
import { LoginPage } from './pages/LoginPage/Login';
import { MarketplacePage } from './pages/Marketplace/Marketplace'
import { WorkPage } from './pages/Work/Work'
// import { ErrorPage } from './pages/NotFoundPage/ErrorPage';
// import { MyPage } from './pages/MyPage/MyPage';
import '../src/App.css'




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<FrontPage />} />
          <Route path='/forside' element={<FrontPage />} />
          <Route path='/marketplace' element={<MarketplacePage />} />
          <Route path='/work' element={<WorkPage />} />

          <Route path='/login' element={<LoginPage />} />
          {/* <Route path="/mypage" element={<MyPage />} /> */}
          {/* <Route path='/*' element={<ErrorPage />} />           */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


