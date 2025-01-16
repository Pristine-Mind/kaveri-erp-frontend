import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import AddSupplier from './components/AddSupplier';
import Products from './components/Products';
import CustomerList from './components/CustomerList';
import OrderList from './components/Orderlist';
import SaleList from './components/SalesList';
import StatsDashboard from './components/StatsDashboard';
import InventoryDashboard from './components/InventoryDashboard';
import BackButton from './components/BackButton';

const App: React.FC = () => {
  return (
    <Router>
      <div className="p-4">
        <ConditionalBackButton />
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/suppliers" element={<AddSupplier />} />
          <Route path="/products" element={<Products />} />
          <Route path="/customers" element={<CustomerList />} />
          <Route path="/orders" element={<OrderList />} />
          <Route path="/sales" element={<SaleList />} />
          <Route path="/stats" element={<StatsDashboard />} />
          <Route path='/inventory-dashboard' element={<InventoryDashboard/>} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </div>
    </Router>
  );
};

const ConditionalBackButton: React.FC = () => {
  const location = useLocation();
  const routesWithBackButton = [
    '/suppliers',
    '/products',
    '/customers',
    '/orders',
    '/sales',
    '/stats',
    '/inventory-dashboard'
  ];

  const shouldShowBackButton = routesWithBackButton.some(route => location.pathname.startsWith(route));

  return shouldShowBackButton ? <BackButton /> : null;
};

export default App;
