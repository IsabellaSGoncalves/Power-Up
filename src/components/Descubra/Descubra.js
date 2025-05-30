
import lifting_svg from '../../images/lifting_svg_power_up.png'
import lifter_svg from '../../images/lifting_svg_power_up2.png'

import './Descubra.css'
function Descubra() {

  return (
    <section className='section-m' id='descubra'>
      <div><h1 className='h-m'>Porque escolher a <b>Power Up</b></h1></div>

      <div className='container-m'>
        <div className='border-m'>
          <div>
            <p className='p-m'>Colegas motivadores </p>
            <p className='p-m'>Treino com qualidade </p>
            <p className='p-m'> Resultados concretos</p>
          </div>
        </div>

        <div >
          <img src={lifting_svg} className='img-levantando' alt="Pessoa levantando peso para demonstrar nossas qualidades" />
          <img src={lifter_svg} className="img-levantando-forca" alt="Pessoa levantando peso para demonstrar nossas qualidades"  />
        </div>
        <div>
          <div className='border-m'>
            <p className='p-m'>
              Mais de 10 anos
            </p>
            <p className='p-m'>
              Planos online/presencial
            </p>
            <p className='p-m'>
              Instrutores experts
            </p>
          </div>
        </div>
      </div>

    </section>
  )

}
export default Descubra