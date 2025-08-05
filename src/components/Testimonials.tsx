
import { Star } from 'lucide-react';

export const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Maria Silva',
      role: 'CEO da Boutique Elegance',
      content: 'A DigitalStudio transformou completamente nossa presença online. O e-commerce que desenvolveram aumentou nossas vendas em 300% em apenas 6 meses.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100',
      rating: 5
    },
    {
      id: 2,
      name: 'João Santos',
      role: 'Diretor da TechStartup',
      content: 'Profissionais excepcionais! Entregaram nosso app mobile antes do prazo e com qualidade superior ao esperado. Recomendo sem hesitação.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
      rating: 5
    },
    {
      id: 3,
      name: 'Ana Costa',
      role: 'Fundadora da EcoVerde',
      content: 'Além do excelente trabalho técnico, a equipe demonstrou total comprometimento com nossos valores sustentáveis. Parceria perfeita!',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            O que nossos <span className="text-blue-600">clientes dizem</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A satisfação dos nossos clientes é nossa maior conquista. 
            Veja o que eles falam sobre nosso trabalho.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 p-8 rounded-2xl hover:bg-gray-100 transition-colors group"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <Star key={index} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 text-lg leading-relaxed italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};