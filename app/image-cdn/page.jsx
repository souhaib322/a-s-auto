import CarCard from '@/components/CarCard';
import { getCars } from '@/lib/cars';

export const revalidate = 3600; // كل ساعة

export default async function CarsPage() {
  const cars = await getCars();
  
  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">معرض السيارات</h1>
      
      {cars.length === 0 ? (
        <p className="text-center py-12">لا توجد سيارات متاحة حالياً</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map(car => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      )}
    </main>
  );
}
