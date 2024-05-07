import './mesa.css';
//import imagem_carrosel from './imagem/imagem_cfe'

function mesa () {
  const [index, setIndex] = useState(0);
  const slides = document.querySelectorAll('.carousel-slide');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex(prevIndex => {
        let newIndex = prevIndex + 1;
        if (newIndex >= slides.length) {
          newIndex = 0; 
        }
        return newIndex;
      });
    }, 3000);

    return () => {
      clearInterval(intervalId); 
    };
  }, []);

  useEffect(() => {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.style.display = 'block';
      } else {
        slide.style.display = 'none';
      }
    });
  }, [index]);

  return (  
    <div className='container'>
      <div className='direita'>

      </div>
      <div className='esquerda'>

          <div class="carousel-container">
            <div class="carousel-slide">
              <img src={imagem_carrosel} className='imagem_cafe' /> 
            </div>
              <div class="carousel-slide">
            <img src={imagem_carrosel} className='imagem_cafe' /> 
            </div>
            <div class="carousel-slide">
              <img src={imagem_carrosel} className='imagem_cafe' /> 
            </div>
          </div>

      </div>
    </div>
  )
}

export default mesa;