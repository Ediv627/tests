import logo from '@/assets/logo.jpg';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-secondary/50 to-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 animate-fade-in">
            <img 
              src={logo} 
              alt="حكاية ورقة" 
              className="h-32 w-32 object-contain md:h-40 md:w-40"
            />
          </div>
          <h1 className="mb-4 font-arabic text-4xl font-bold text-primary animate-slide-up md:text-5xl lg:text-6xl">
            حكاية ورقة
          </h1>
          <p className="mb-2 font-serif text-2xl text-foreground animate-slide-up md:text-3xl" style={{ animationDelay: '0.1s' }}>
            Story Paper
          </p>
          <p className="max-w-xl text-muted-foreground animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Discover our curated collection of fine stationery, writing instruments, and paper goods. 
            Each piece tells a story waiting to be written.
          </p>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -right-20 bottom-20 h-64 w-64 rounded-full bg-accent/30 blur-3xl" />
    </section>
  );
};

export default Hero;
