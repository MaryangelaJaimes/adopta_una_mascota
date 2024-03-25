import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import MyCard from "./components/MyCard/MyCard";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header titulo="Adopta una Mascota" />
      <div className="container d-flex justify-content-center p-5">
        <div className="row g-3">
          <div className="col-md-3">
            <MyCard
              image="https://images.unsplash.com/photo-1612690319858-99b5b909fae1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2F0b3MlMjBuZWdyb3N8ZW58MHx8MHx8fDA%3D"
              name="Gati"
              description="Gati, el gatito más encantador, regalón e inteligente que jamás encontrarás, es un peludo aficionado al churito y el jamóncito, ¡Los adora!"
              raza="Gatineytor"
              bgColor="primary"
            />
          </div>

          <div className="col-md-3">
            <MyCard
              image="https://images.unsplash.com/photo-1602877641247-de6c5cecf3e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGdhdG9zJTIwbmVncm9zfGVufDB8fDB8fHww"
              name="Pixel"
              description="Conoce a Pixel, el gatito más juguetón, curioso y amante del churito. Pixel disfruta de horas interminables de diversión jugando y mordisqueando su ratoncito de juguete favorito."
              raza="Bedlington terrier"
              bgColor="success"
            />
          </div>

          <div className="col-md-3">
            <MyCard
              image="https://images.unsplash.com/photo-1607626265631-e4364e5486f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHBlcnJvcyUyMG5lZ3Jvc3xlbnwwfHwwfHx8MA%3D%3D"
              name="Eren Yeager"
              description="Le encanta explorar, jugar y correr en círculos alrededor de sus dueños. Son conocidos por ser cariñosos y leales, lo que los convierte en excelentes compañeros."
              raza="Crestado chino"
              bgColor="info"
            />
          </div>

          <div className="col-md-3">
            <MyCard
              image="https://images.unsplash.com/photo-1547480786-6552fae2dd51?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIyfHxwZXJyb3MlMjBuZWdyb3N8ZW58MHx8MHx8fDA%3D"
              name="Mikasa"
              description="A pesar de su apariencia, son conocidos por ser afectuosos, leales y amigables con las personas. Son perros inteligentes, energeticos y felices con mucha energia y felicidad."
              raza="Basenji"
              bgColor="danger"
            />
          </div>
        </div>
      </div>

      <div>
        <Footer text="© 2024 mjc. Todos los derechos reservados." />
      </div>
    </>
  );
}

export default App;
