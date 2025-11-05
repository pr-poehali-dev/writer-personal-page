import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const books = [
    {
      title: "Эхо забытых времён",
      description: "Мистический роман о девушке, которая может слышать голоса прошлого",
      price: "299 ₽",
      cover: "https://cdn.poehali.dev/projects/599ffdd3-a1b5-4468-8d74-2c7be1e02288/files/211a4fc1-7351-45ed-a10b-0050b2ecd74d.jpg"
    },
    {
      title: "Последний рассвет",
      description: "Антиутопия о мире, где солнце исчезает навсегда",
      price: "349 ₽",
      cover: "https://cdn.poehali.dev/projects/599ffdd3-a1b5-4468-8d74-2c7be1e02288/files/278e41c1-81bb-4271-a1e3-cd1c5e4cd219.jpg"
    },
    {
      title: "Между строк",
      description: "Сборник психологических новелл о тайнах человеческой души",
      price: "249 ₽",
      cover: "/placeholder.svg"
    }
  ];

  const stories = [
    {
      title: "Ночной город",
      description: "Короткий рассказ о таинственной встрече в метро",
      link: "#"
    },
    {
      title: "Письмо себе",
      description: "История о девушке, получившей послание из будущего",
      link: "#"
    },
    {
      title: "Хранитель снов",
      description: "Фантастическая новелла о человеке, живущем в чужих сновидениях",
      link: "#"
    }
  ];

  const reviews = [
    {
      text: "Читала на одном дыхании! Потрясающая атмосфера и неожиданная развязка. Автор умеет держать в напряжении до последней страницы.",
      author: "Анна К.",
      rating: 5
    },
    {
      text: "Очень глубокие персонажи и философские размышления. Книга заставила меня по-новому взглянуть на многие вещи.",
      author: "Михаил Р.",
      rating: 5
    },
    {
      text: "Восхитительный слог! Каждое предложение продумано, каждая метафора на своём месте. Настоящая литература!",
      author: "Елена В.",
      rating: 5
    }
  ];

  const gallery = [
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 font-open-sans">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-purple-100">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-montserrat font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Юлия Щёлокова
          </h1>
          <div className="flex gap-6">
            <a href="#about" className="text-gray-700 hover:text-primary transition-colors">О себе</a>
            <a href="#books" className="text-gray-700 hover:text-primary transition-colors">Книги</a>
            <a href="#stories" className="text-gray-700 hover:text-primary transition-colors">Рассказы</a>
            <a href="#subscribe" className="text-gray-700 hover:text-primary transition-colors">Подписка</a>
            <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
          </div>
        </nav>
      </header>

      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <Badge className="bg-gradient-to-r from-primary to-secondary text-white border-0">
              Писательница
            </Badge>
            <h2 className="text-5xl md:text-6xl font-montserrat font-bold leading-tight">
              Создаю миры, <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                в которых хочется жить
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Пишу о том, что волнует душу. Мои истории — это путешествия в глубины человеческих эмоций, 
              фантазии и реальности, переплетённые в одно целое.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                <Icon name="BookOpen" size={20} className="mr-2" />
                Читать книги
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white">
                <Icon name="Sparkles" size={20} className="mr-2" />
                Подписаться
              </Button>
            </div>
          </div>
          <div className="relative animate-scale-in">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-2xl opacity-30"></div>
            <img 
              src="https://cdn.poehali.dev/projects/599ffdd3-a1b5-4468-8d74-2c7be1e02288/files/274d349d-5166-46a3-87b1-462dfc141bf3.jpg" 
              alt="Юлия Щёлокова" 
              className="relative rounded-3xl shadow-2xl w-full object-cover aspect-[3/4]"
            />
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white/60 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h3 className="text-4xl md:text-5xl font-montserrat font-bold mb-8">
              Обо мне
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Я начала писать в 16 лет, когда поняла, что слова могут быть мощнее любого другого инструмента. 
              Моя цель — не просто рассказать историю, а создать эмоциональный опыт, который останется с читателем навсегда.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              За моими плечами 7 опубликованных книг, более 50 рассказов и тысячи читателей по всему миру. 
              Я верю, что литература способна менять жизни, и каждая моя работа — это частичка моей души, 
              которой я делюсь с вами.
            </p>
            <div className="flex justify-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-4xl font-montserrat font-bold text-primary">7</div>
                <div className="text-gray-600 mt-2">Книг</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-montserrat font-bold text-secondary">50+</div>
                <div className="text-gray-600 mt-2">Рассказов</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-montserrat font-bold text-accent">10k+</div>
                <div className="text-gray-600 mt-2">Читателей</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="books" className="py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl md:text-5xl font-montserrat font-bold text-center mb-12">
            Мои книги
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {books.map((book, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={book.cover} 
                    alt={book.title} 
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader>
                  <CardTitle className="font-montserrat text-2xl">{book.title}</CardTitle>
                  <CardDescription className="text-base">{book.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">{book.price}</span>
                    <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                      <Icon name="ShoppingCart" size={16} className="mr-2" />
                      Купить на Литрес
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="stories" className="py-20 bg-gradient-to-br from-purple-100 to-pink-100">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl md:text-5xl font-montserrat font-bold text-center mb-12">
            Рассказы
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {stories.map((story, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="font-montserrat flex items-start justify-between">
                    {story.title}
                    <Icon name="FileText" size={24} className="text-primary" />
                  </CardTitle>
                  <CardDescription>{story.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                    Читать бесплатно
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl md:text-5xl font-montserrat font-bold text-center mb-12">
            Отзывы читателей
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="border-0 bg-gradient-to-br from-white to-purple-50 shadow-lg">
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardDescription className="text-base text-gray-700 italic">
                    "{review.text}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-primary">— {review.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="subscribe" className="py-20 bg-gradient-to-r from-primary via-secondary to-accent">
        <div className="container mx-auto px-4 text-center text-white">
          <h3 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
            Подпишитесь на мои каналы
          </h3>
          <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90">
            Эксклюзивный контент, закулисье творческого процесса, ранний доступ к новым работам 
            и личное общение с автором
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              <Icon name="Send" size={20} className="mr-2" />
              Telegram Premium
            </Button>
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              <Icon name="Youtube" size={20} className="mr-2" />
              YouTube Членство
            </Button>
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              <Icon name="Rss" size={20} className="mr-2" />
              Boosty
            </Button>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl md:text-5xl font-montserrat font-bold text-center mb-12">
            Фотогалерея
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((photo, index) => (
              <div key={index} className="relative overflow-hidden rounded-2xl aspect-square group">
                <img 
                  src={photo} 
                  alt={`Фото ${index + 1}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
            Давайте на связи
          </h3>
          <p className="text-xl mb-12 max-w-2xl mx-auto text-gray-300">
            Хотите обсудить сотрудничество, задать вопрос или просто поделиться впечатлениями? 
            Буду рада услышать вас!
          </p>
          <div className="flex justify-center gap-6 mb-12">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
              <Icon name="Mail" size={20} className="mr-2" />
              Email
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
              <Icon name="Instagram" size={20} className="mr-2" />
              Instagram
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
              <Icon name="Facebook" size={20} className="mr-2" />
              Facebook
            </Button>
          </div>
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400">
              © 2024 Юлия Щёлокова. Все права защищены.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;