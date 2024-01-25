import Title from '../../components/Title'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const About = () => (
  <section>
    <Title fontSize={16}>Sobre mim</Title>
    <Paragrafo tipo="secundario">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
      voluptatem quae est atque reprehenderit dolores nam neque earum quibusdam
      reiciendis natus totam praesentium excepturi cum dolorum hic saepe, a
      incidunt?
    </Paragrafo>
    <GithubSecao>
      <img
        src="https://github-readme-stats.vercel.app/api?username=SuaveGreen&show_icons=true&count_private=true&hide_border=true&title_color=C6E5B1&icon_color=C6E5B1&text_color=C6E5B1&bg_color=0d1117"
        alt="Pedro Caetano github stats"
      />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=SuaveGreen&layout=compact&hide_border=true&title_color=C6E5B1&text_color=C6E5B1&bg_color=0d1117" />
    </GithubSecao>
  </section>
)

export default About
