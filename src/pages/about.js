import React, { useRef } from 'react';

import Container from '../components/Container';
import Hero from '../components/Hero';
import ThemeLink from '../components/ThemeLink';
import Layout from '../components/Layout/Layout';
import { StaticImage } from "gatsby-plugin-image"

import * as styles from './about.module.css';
const AboutPage = (props) => {
  let historyRef = useRef();
  let valuesRef = useRef();
  let sumenhRef = useRef();

  const handleScroll = (elementReference) => {
    if (elementReference) {
      window.scrollTo({
        behavior: 'smooth',
        top: elementReference.current.offsetTop - 280,
      });
    }
  };

  return (
    <Layout disablePaddingBottom>
      <div className={styles.root}>
        {/* Hero Container */}
        <Hero
          // maxWidth={'900px'}
          image={'/about.jpg'}
          title={`Sâm Shilla \nHồng sâm đến từ Hàn Quốc`}
        />

        <div className={styles.navContainer}>
          <ThemeLink
            onClick={() => handleScroll(sumenhRef)}
            to={'#sumenh'}
          >
            Sứ mệnh
          </ThemeLink>
          <ThemeLink onClick={() => handleScroll(valuesRef)} to={'#values'}>
            Giá trị
          </ThemeLink>
          <ThemeLink onClick={() => handleScroll(historyRef)} to={'#history'}>
            Cảm hứng
          </ThemeLink>
        </div>

        <Container size={'large'} spacing={'min'}>
          <br />
          <h3>Sứ mệnh</h3>
          <div id={'#sumenh'} ref={sumenhRef}>
            <section>
              <br />
              <p>
                Chúng tôi cam kết cung cấp nhân sâm chất lượng tốt nhất từ Hàn Quốc cho người Việt. Chúng tôi tận tâm để mang đến sức khỏe tốt nhất cho khách hàng của chúng tôi bằng cách bán nhân sâm chất lượng, đảm bảo an toàn và hiệu quả cao nhất.
              </p>
              <br />
              <p>
                Chúng tôi tin rằng điều này sẽ giúp các bạn đạt được hạnh phúc và cải thiện sức khỏe. Bằng nhân sâm chất lượng cao, Sâm Shilla mong muốn đồng hành cùng khách hàng trong chuyến đi tìm kiếm chất lượng cuộc sống .
              </p>
            </section>
          </div>
          <div className={styles.imageContainer}>
            <StaticImage layout='fullWidth' alt={'su menh'} src={'../../static/about1.jpg'} />
          </div>
        </Container>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.content}>
            <h3>Giá trị</h3>
            <div ref={valuesRef}>
              <section>
                <h4>Lợi ích của nhân sâm</h4>
                <ol>
                  <li>Nhân sâm là một loại thực phẩm có lợi cho sức khỏe và được sử dụng trong y học từ thời nhà Nguyên. Đã được chứng minh từ nhiều nguồn là có lợi cho sức khỏe.</li>
                  <li>Tác dụng nổi tiếng nhất là cung cấp dinh dưỡng và giúp tăng sức đề kháng của cơ thể. Nó cũng giúp cho da trở nên tươi trẻ và sáng hơn.</li>
                  <li>Theo đông y, nhân sâm có tác dụng làm giảm đau, ngừa viêm giúp bảo vệ nội tiết tố, tăng cường miễn dịch. Giúp làm giảm triệu chứng và hỗ trợ điều trị 1 số bệnh.</li>
                </ol>
              </section>
              <section>
                <h4>Sâm Shilla có gì vượt trội so với các loại sâm khác?</h4>
                <ol>
                  <li>Nhân sâm Hàn Quốc được thu hái từ vùng núi cao Hàn Quốc và được giữ nguyên nguyên liệu thiên nhiên. Nhân sâm Hàn Quốc cũng có 1 chút tinh tế hơn so với các loại nhân sâm khác, cả về hương vị cũng như sắc màu và độ bóng</li>
                  <li>Tại nhà máy của chúng tôi, sâm được chọn lựa và kiểm soát chặt chẽ. Người dùng có thể yên tâm về chất lượng của sản phẩm và có thể hưởng lợi tối đa từ nó.</li>
                </ol>
                <StaticImage alt={'founder'} src={'../../static/about2.jpg'} />
              </section>
            </div>

            <div className={styles.detailContainer} ref={historyRef}>
              <h3>Cái tên Shilla</h3>
              <br />
              <p>
                Shilla là tên của 1 Vương Quốc rất phồn thịnh vào thời kì cổ đại xưa, được xem là triều đại lâu đời và thịnh vượng nhất trong lịch sử Hàn Quốc với hơn 1000 năm trị vì. Shilla nổi tiếng với vàng và hồng sâm, biểu tượng cho sự giàu có, uy quyền và sức khoẻ dồi dào. Hồng sâm vào thời điểm đó đã được các nước khác rất ưa chuộng và sử dụng như những vật phẩm xa xỉ dâng biếu Vua chúa và tầng lớp quý tộc.
              </p>
              <br />
              <p>
                Nhắc đến Shilla, chúng ta cảm giác được năng lượng của thịnh vượng, năng lượng của mặt trời bao phủ xung quanh không gian sống và không chỉ đem lại sức khoẻ cho cơ thể mà còn đem lại sức khoẻ tinh thần cho mọi người
              </p>
              <br />
              <p>
                29-16, Hayeongcheo-gil, Geumsan-eup, Geumsan-gun, Chungcheongnam-do, Republic of Korea
              </p>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export const Head = ({ data }) => {
  return (
    <>
      <title>{'Giới thiệu | Sâm Shilla'}</title>
      <meta name="description" content="Giới thiệu về Sâm Shilla" />
    </>
  );
};

export default AboutPage;
