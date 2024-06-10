import Header from '../components/Header';
import Footer from '../components/Footer';
import CreateProductComponent from '../components/CreateProductComponent';

export default function CreateProduct() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <CreateProductComponent />
      <Footer />
    </div>
  );
}
