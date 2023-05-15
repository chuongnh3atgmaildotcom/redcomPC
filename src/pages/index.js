import React from 'react';
import * as styles from './shop.module.css';

import Banner from '../components/Banner';
// import CardController from '../components/CardController';
import Container from '../components/Container';
// import Chip from '../components/Chip';
// import Icon from '../components/Icons/Icon';
import Layout from '../components/Layout';
// import LayoutOption from '../components/LayoutOption';
import ProductCardGrid from '../components/ProductCardGrid';
// import Button from '../components/Button';
// import Config from '../config.json';
import { graphql } from 'gatsby';

const IndexPage = ({ data }) => {
  // const [showFilter, setShowFilter] = useState(false);
  const { allProductJson: { nodes: allProducts } } = data
  // console.log('index allProducts', allProducts)
  // useEffect(() => {
  //   window.addEventListener('keydown', escapeHandler);
  //   return () => window.removeEventListener('keydown', escapeHandler);
  // }, []);

  // const escapeHandler = (e) => {
  //   if (e?.keyCode === undefined) return;
  //   if (e.keyCode === 27) setShowFilter(false);
  // };

  return (
    <Layout>
      <div className={styles.root}>
        <Banner
          maxWidth={'650px'}
          name={`Các sản phẩm hồng sâm của Shilla`}
          bgImage={'/faqCover.jpg'}
          color={"var(--sale)"}
          height={'350px'}
          primarytextClass={true}
        />
        <Container size={'large'} spacing={'min'}>
          <div className={styles.metaContainer}>
            <h2 className={styles.itemCount}>{allProducts.length ?? 0} sản phẩm</h2>
            {/* <div className={styles.controllerContainer}>
              <div
                className={styles.iconContainer}
                role={'presentation'}
                onClick={() => setShowFilter(!showFilter)}
              >
                <Icon symbol={'filter'} />
                <span>Filters</span>
              </div>
              <div
                className={`${styles.iconContainer} ${styles.sortContainer}`}
              >
                <span>Sort by</span>
                <Icon symbol={'caret'} />
              </div>
            </div> */}
          </div>
          {/* <CardController
            closeFilter={() => setShowFilter(false)}
            visible={showFilter}
            filters={Config.filters}
          /> */}
          {/* <div className={styles.chipsContainer}>
            <Chip name={'XS'} />
            <Chip name={'S'} />
          </div> */}
          <div className={styles.productContainer}>
            <h2 className={styles.mobileItemCount}>{allProducts.length ?? 0} sản phẩm</h2>
            <ProductCardGrid data={allProducts}></ProductCardGrid>
          </div>
          {/* <div className={styles.loadMoreContainer}>
            <span>6 of 456</span>
            <Button fullWidth level={'secondary'}>
              LOAD MORE
            </Button>
          </div> */}
        </Container>
        <Container size={'large'} spacing={'min'}>
          <div style={{ marginTop: "100px", paddingTop: "50px", backgroundColor: "#FCFAF6", borderTop: "1px solid #A9A9A8" }}>
            <p>Hồng sâm tẩm mật ong Hàn Quốc là một trong những sản phẩm dinh dưỡng đang được ưa chuộng tại Việt Nam trong những năm gần đây. Với nguồn gốc từ đất nước Hàn Quốc nổi tiếng với những sản phẩm chất lượng cao, hồng sâm tẩm mật ong Hàn Quốc đã được nhiều người tin dùng vì tính năng bổ sung năng lượng và cải thiện sức khỏe đáng kể.
              Với những giá trị dinh dưỡng và lợi ích sức khỏe mà nó mang lại, hồng sâm tẩm mật ong Hàn Quốc đã trở thành một loại thực phẩm chức năng phổ biến trên thị trường.</p>


            <p>Tuy nhiên, khi muốn mua hồng sâm tẩm mật ong Hàn Quốc, nhiều người vẫn còn băn khoăn về các lợi ích sức khỏe của nó, cách sử dụng hiệu quả, tác dụng phụ có thể xảy ra và đặc biệt là nơi mua hồng sâm chính hãng tại Việt Nam. Với những thông tin dưới đây, chúng tôi hi vọng sẽ giúp bạn có được lựa chọn và sử dụng sản phẩm hồng sâm tẩm mật ong Hàn Quốc đúng cách, giúp cải thiện sức khỏe và tăng cường năng lượng một cách tối đa.</p>



            <h2>Giới thiệu về hồng sâm</h2>

            <h3>Nguồn gốc và lịch sử của nhân sâm Hàn Quốc</h3>

            <p>Nhân sâm (Panax ginseng) là một loại thảo dược được sử dụng trong y học truyền thống của nhiều nước, đặc biệt là Hàn Quốc. Nhân sâm có nhiều tên gọi khác nhau như sâm tây, sâm Hàn Quốc, hoặc đơn giản là sâm. Nhân sâm Hàn Quốc được coi là loại sâm tốt nhất và phổ biến nhất trên thế giới vì chất lượng cao và giá trị dinh dưỡng tuyệt vời. Nó được biết đến như một loại thực phẩm chức năng có tác dụng rất tốt cho sức khỏe con người. Nhân sâm cũng được sử dụng như một thành phần chính trong nhiều sản phẩm chăm sóc sức khỏe như viên nang, bánh kẹo, nước uống, kem dưỡng da và cả trong mỹ phẩm.</p>

            <p>Nhân sâm đã được sử dụng như một loại thuốc và thực phẩm dinh dưỡng trong y học truyền thống của Hàn Quốc trong hơn 2.000 năm qua. Trong thời kỳ Joseon (1392-1910), nhân sâm được coi là một loại thuốc quý hiếm và chỉ được sử dụng bởi hoàng gia và quý tộc. Sau đó nó trở thành một loại thực phẩm dinh dưỡng phổ biến và được sử dụng rộng rãi ở Hàn Quốc và các nước châu Á khác.</p>

            <h3>Vì sao nhân sâm được coi là thần dược?</h3>

            <p>Nhân sâm được coi là thần dược bởi vì nó chứa nhiều chất dinh dưỡng và hoạt chất có lợi cho sức khỏe như saponin, polysaccharide, axit amin, khoáng chất và vitamin. Tuy nhiên, thành phần quan trọng nhất trong hồng sâm là saponin (ginsenoside). Saponin là một chất tự nhiên có tác dụng chống viêm, chống oxy hóa và hỗ trợ tăng cường miễn dịch cho cơ thể. Hồng sâm cũng chứa nhiều vitamin và khoáng chất như sắt, magie, canxi và kẽm, giúp cải thiện sức khỏe toàn diện.</p>

            <h3>Hồng sâm chính là nhân sâm được tẩm mật ong</h3>

            <p>Hồng sâm khác biệt với sâm thường ở màu sắc và quy trình sản xuất. Hồng sâm có màu đỏ và được tẩm mật ong để tăng cường hương vị và tính độc đáo. Quy trình sản xuất hồng sâm cũng phức tạp hơn so với sâm thường. Nó được trồng và chăm sóc trong điều kiện đặc biệt để đạt được chất lượng cao nhất trước khi được thu hái và chế biến.</p>

            <h3> Các loại hồng sâm phổ biến</h3>

            <p>Có một số loại hồng sâm phổ biến: hồng sâm nhân sâm, hồng sâm nhung hươu và hồng sâm đỏ. Hồng sâm đỏ là loại cao cấp nhất và được thu hái sau 6 năm trồng. Loại này có màu đỏ sậm và hương vị đặc biệt, được tẩm mật ong để tăng cường giá trị dinh dưỡng.</p>

            <h2>Lợi ích sức khỏe của hồng sâm Hàn Quốc</h2>

            <p>Hồng sâm Hàn Quốc được coi là một trong những thảo dược quý giá nhất trên thế giới, được sử dụng từ hàng ngàn năm nay với nhiều lợi ích cho sức khỏe con người:</p>
            <ul>
              <li>
                <b>Tăng cường hệ miễn dịch</b>
                <p>Hồng sâm Hàn Quốc là một trong những loại thực phẩm giàu saponin, một hợp chất có khả năng kích thích hệ miễn dịch của cơ thể. Saponin có thể tăng cường khả năng tiêu diệt vi khuẩn và virus, giúp cơ thể chống lại các bệnh nhiễm trùng và bệnh lý khác. Các thành phần trong hồng sâm Hàn Quốc giúp tăng cường khả năng chống lại các bệnh nhiễm trùng và đẩy lùi các tác nhân gây bệnh từ môi trường bên ngoài.</p>
              </li>
              <li>
                <b>Tăng cường năng lượng và sức bền</b>
                <p>Hồng sâm Hàn Quốc được coi là một trong những loại thực phẩm có khả năng tăng cường năng lượng và sức bền, giúp cơ thể tăng cường sức đề kháng và khả năng chống lại các căng thẳng, mệt mỏi trong cuộc sống hàng ngày.</p>
              </li>
              <li>
                <b>
                  Giảm stress và trầm cảm
                </b>
                <p>Hồng sâm Hàn Quốc cũng có khả năng giúp giảm stress và trầm cảm bằng cách cân bằng hệ thần kinh và giúp tăng cường sức khỏe tinh thần. Hồng sâm Hàn Quốc chứa một loạt các chất chống oxy hóa và các dưỡng chất có lợi cho cơ thể, giúp cải thiện tình trạng mệt mỏi và giảm bớt căng thẳng. Một số nghiên cứu cho thấy rằng, việc sử dụng hồng sâm Hàn Quốc trong một thời gian dài có thể giúp giảm các triệu chứng của stress và cải thiện chất lượng giấc ngủ.</p>
              </li>
              <li>
                <b>
                  Tăng cường chức năng não và tăng cường trí nhớ
                </b>
                <p>Hồng sâm Hàn Quốc có chứa các hợp chất triterpenoid và saponin giúp tăng cường chức năng não, giảm thiểu các tổn thương trên não và giúp cải thiện trí nhớ. Các nghiên cứu cũng cho thấy rằng hồng sâm Hàn Quốc có thể giúp giảm nguy cơ mắc bệnh Alzheimer và Parkinson.</p>
              </li>
              <li>
                <b>
                  Giảm cholesterol và huyết áp
                </b>
                <p>Hồng sâm Hàn Quốc có khả năng giảm cholesterol xấu (LDL) và huyết áp, giúp cải thiện sức khỏe tim mạch và giảm nguy cơ mắc các bệnh về tim mạch.</p>
              </li>
              <li>
                <b>
                  Tăng cường chức năng gan
                </b>
                <p>Hồng sâm Hàn Quốc được coi là một trong những loại thảo dược có tác dụng tốt cho sức khỏe gan. Nghiên cứu đã chỉ ra rằng các hợp chất trong hồng sâm có thể giúp giảm độ độc hại trong gan, cải thiện chức năng gan và đẩy nhanh quá trình phục hồi gan. Cụ thể, hồng sâm Hàn Quốc được cho là có khả năng tăng cường hoạt động của enzyme gan và giúp giảm mức độ độc tố trong gan. Một số nghiên cứu còn cho thấy rằng hồng sâm có thể giúp ngăn ngừa các bệnh lý liên quan đến gan như xơ gan, viêm gan và ung thư gan.</p>
                <p>Ngoài ra, hồng sâm cũng có tác dụng bảo vệ gan khỏi sự tổn thương do các yếu tố bên ngoài như ô nhiễm, thuốc lá, rượu và các chất độc hại khác. Do đó, việc sử dụng hồng sâm tẩm mật ong Hàn Quốc có thể giúp bạn có một gan khỏe mạnh, tăng cường chức năng gan và giảm nguy cơ mắc các bệnh lý liên quan đến gan.</p>
              </li>
            </ul>

            <h2>Cách dùng hồng sâm Hàn Quốc hiệu quả</h2>

            <p>Hồng sâm Hàn Quốc là một sản phẩm tự nhiên có nhiều lợi ích cho sức khỏe. Tuy nhiên, để đạt được hiệu quả tối đa khi sử dụng hồng sâm Hàn Quốc, người dùng cần biết cách sử dụng đúng cách. Trong phần này, chúng ta sẽ tìm hiểu cách dùng hồng sâm Hàn Quốc hiệu quả.</p>
            <ul>
              <li>
                <b>
                  Dùng trực tiếp
                </b>
                <p>
                  Hồng sâm Hàn Quốc có thể được sử dụng trực tiếp hoặc nấu ăn. Hồng sâm Hàn Quốc đã được tẩm mật ong để cải thiện hương vị nên rất dễ ăn.
                </p>
              </li>
              <li>
                <b>
                  Các chế phẩm hồng sâm Hàn Quốc
                </b>
                <p>
                  Ngoài dùng trực tiếp, hồng sâm Hàn Quốc còn được sử dụng dưới dạng viên nén, bột hoặc dạng nước. Liều lượng và thời gian sử dụng của hồng sâm Hàn Quốc sẽ phụ thuộc vào mục đích sử dụng và tình trạng sức khỏe của người sử dụng. Tuy nhiên, theo các chuyên gia, liều lượng sử dụng thông thường là từ 1 đến 3g mỗi ngày. Đối với trẻ em và người già, liều lượng sử dụng sẽ thấp hơn tùy thuộc vào tình trạng sức khỏe của mỗi người.
                </p>
              </li>
              <li>
                <b>
                  Pha trà hoặc nước hồng sâm
                </b>
                <p>Việc nấu nước hồng sâm đúng cách rất quan trọng để giữ được các thành phần chính của hồng sâm. Bạn có thể dùng hồng sâm Hàn Quốc tươi hoặc sấy khô để nấu nước. Cách nấu nước hồng sâm cũng đơn giản: Cho hồng sâm vào nước lạnh, sôi trong khoảng 1-2 giờ rồi để nguội và uống.</p>
              </li>
            </ul>

            <h3>Liều lượng và thời gian sử dụng</h3>

            <p></p>

            <p>Thời gian sử dụng của hồng sâm Hàn Quốc cũng tùy thuộc vào mục đích sử dụng và tình trạng sức khỏe của người sử dụng. Tuy nhiên, để đạt được hiệu quả tối đa, người sử dụng nên sử dụng hồng sâm Hàn Quốc liên tục trong một khoảng thời gian từ 4 đến 8 tuần.</p>

            <h3>Cách dùng hồng sâm Hàn Quốc hiệu quả cho từng mục tiêu sức khỏe cụ thể</h3>

            <ul>
              <li>
                <b>
                  Cách dùng hồng sâm Hàn Quốc hiệu quả cho năng lượng và sức bền
                </b>
                <p>Việc sử dụng hồng sâm Hàn Quốc với đúng liều lượng là rất quan trọng để đảm bảo tối đa hiệu quả của nó. Liều lượng hồng sâm Hàn Quốc phù hợp cho người lớn là từ 1 đến 3 gram mỗi ngày. Tuy nhiên, đối với trẻ em hoặc những người có sức khỏe yếu, liều lượng cần phải thấp hơn và nên tham khảo ý kiến của bác sĩ trước khi sử dụng.</p>
                <p>Việc sử dụng hồng sâm Hàn Quốc vào thời điểm phù hợp cũng rất quan trọng. Nếu sử dụng hồng sâm vào ban đêm, có thể dẫn đến rối loạn giấc ngủ. Vì vậy, bạn nên sử dụng hồng sâm Hàn Quốc vào buổi sáng hoặc trước buổi tối để đảm bảo tối đa hiệu quả.</p>
                <p>Hồng sâm tẩm mật ong Hàn Quốc là sự kết hợp hoàn hảo giữa hai loại thực phẩm có tác dụng tốt cho sức khỏe. Khi kết hợp cùng nhau, chúng tạo thành một sản phẩm có tác dụng tăng cường năng lượng và sức bền cho cơ thể.</p>
                <p>Khi sử dụng hồng sâm Hàn Quốc kết hợp với sữa, cơ thể sẽ hấp thụ các dưỡng chất trong hồng sâm nhanh hơn. Ngoài ra, sữa cũng giúp làm giảm độ đắng</p>
              </li>
              <li>
                <b>
                  Cách dùng hồng sâm Hàn Quốc hiệu quả cho hệ tiêu hóa
                </b>
                <p>Hồng sâm Hàn Quốc có thể giúp cải thiện hệ tiêu hóa bằng cách kích thích sự sản xuất enzym và tăng cường chức năng gan. Dưới đây là một số cách dùng hồng sâm Hàn Quốc để hỗ trợ cho hệ tiêu hóa:
                  <p>Uống hồng sâm trước bữa ăn: Một trong những cách dùng hồng sâm Hàn Quốc cho hệ tiêu hóa là uống trước khi ăn để kích thích sản xuất enzym tiêu hóa và giảm nguy cơ đầy hơi, khó tiêu. Bạn có thể dùng hồng sâm trước bữa ăn 30 phút hoặc 1 giờ, tùy vào từng người và mục đích sử dụng.</p>
                  <p>Dùng hồng sâm với mật ong: Hồng sâm tẩm mật ong Hàn Quốc là một sản phẩm kết hợp giữa hồng sâm và mật ong, vừa cung cấp năng lượng vừa giúp tiêu hóa tốt hơn. Bạn có thể dùng hồng sâm tẩm mật ong trước bữa ăn hoặc sau bữa ăn, tùy vào mục đích sử dụng.</p>
                  <p>Dùng hồng sâm vào buổi sáng: Buổi sáng là thời điểm tốt nhất để sử dụng hồng sâm Hàn Quốc, bởi lúc này cơ thể cần năng lượng để bắt đầu một ngày mới. Bạn có thể uống hồng sâm vào buổi sáng trước khi ăn sáng hoặc dùng thay thế cho nước trà, cà phê.</p>
                  <p>Dùng hồng sâm kết hợp với thực phẩm dễ tiêu hóa: Bạn có thể kết hợp hồng sâm với các thực phẩm dễ tiêu hóa như trái cây tươi, rau củ quả để tăng cường hiệu quả tiêu hóa. Hồng sâm có thể kích thích sự trao đổi chất và cải thiện quá trình tiêu hóa, giúp cơ thể hấp thụ các chất dinh dưỡng tốt hơn.</p>
                  <p>Dùng hồng sâm như một liều hỗ trợ: Nếu bạn đang gặp vấn đề về hệ tiêu hóa, có thể dùng hồng sâm như một liều hỗ trợ để cải thiện tình trạng. Tuy n</p>
                </p>
              </li>
            </ul>
            <h3>Tác dụng phụ của hồng sâm Hàn Quốc</h3>
            <p>Mặc dù hồng sâm Hàn Quốc có nhiều lợi ích cho sức khỏe, tuy nhiên, như bất kỳ loại thuốc hoặc thực phẩm nào khác, nó cũng có thể gây ra một số tác dụng phụ. Dưới đây là một số tác dụng phụ của hồng sâm Hàn Quốc:</p>
            <ul>
              <li>
                <b>
                  Chống chỉ định cho một số trường hợp
                </b>
                <p>Người bị huyết áp cao: Hồng sâm có tác dụng tăng lưu lượng máu và giãn nở mạch máu, do đó nó có thể làm tăng huyết áp và gây nguy hiểm cho những người có huyết áp cao.</p>

                <p>Người bị tiểu đường: Hồng sâm có thể tác động đến mức độ đường huyết và làm cho nó tăng lên. Việc tiêu thụ hồng sâm có thể không tốt cho những người bị tiểu đường hoặc người có mức đường huyết cao.</p>

                <p>Người bị dị ứng: Hồng sâm có thể gây ra phản ứng dị ứng ở một số người. Nếu bạn có bất kỳ phản ứng dị ứng nào sau khi tiêu thụ hồng sâm, bạn nên ngưng sử dụng và tham khảo ý kiến ​​của bác sĩ.</p>

                <p>Phụ nữ mang thai hoặc đang cho con bú: Việc sử dụng hồng sâm trong giai đoạn thai kỳ và cho con bú có thể gây nguy hiểm cho cả mẹ và em bé.</p>
              </li>
              <li>
                <b>
                  Đau đầu và chóng mặt
                </b>
                <p>Một số người sử dụng hồng sâm Hàn Quốc có thể bị đau đầu và chóng mặt. Nguyên nhân chính là do hồng sâm có tác dụng tăng cường lưu thông máu. Nếu lượng máu được cung cấp quá nhiều đến não, có thể dẫn đến đau đầu và chóng mặt. Để tránh tình trạng này, người dùng nên tham khảo ý kiến của bác sĩ trước khi sử dụng hồng sâm.</p>
              </li>
              <li>
                <b>
                  Khó ngủ
                </b>
                <p>Một số người sử dụng hồng sâm Hàn Quốc có thể gặp khó khăn khi ngủ. Lý do chính là do hồng sâm có tác dụng kích thích hoạt động não bộ và tăng cường sự hoạt động của cơ thể. Điều này có thể làm cho người dùng cảm thấy mệt mỏi và không thể ngủ được. Để tránh tình trạng này, người dùng nên sử dụng hồng sâm vào ban đêm hoặc tham khảo ý kiến của bác sĩ trước khi sử dụng.</p>
              </li>
              <li>
                <b>
                  Đau dạ dày
                </b>
                <p>Một số người sử dụng hồng sâm Hàn Quốc có thể gặp phải vấn đề về đau dạ dày. Lý do chính là do hồng sâm có tính nóng, có thể gây kích thích và tăng sản xuất acid trong dạ dày. Để tránh tình trạng này, người dùng nên ăn đồ ăn nhẹ trước khi sử dụng hồng sâm và tăng cường việc uống nước.</p>
              </li>
              <li>
                <b>
                  Tác dụng khác
                </b>
                <p>Ngoài các tác dụng phụ đã nêu trên, một số tác dụng khác hiếm gặp hơn bao gồm: tim đập nhanh, tăng huyế áp, điểm đỏ trên da, chảy máu chân răng.</p>
              </li>
            </ul>

            <h2>Mua hồng sâm Hàn Quốc ở đâu?</h2>

            <h3>Tại Hàn Quốc</h3>
            <p>Bạn có thể tìm kiếm Set quà hồng sâm Hàn Quốc ở các cửa hàng địa phương, đặc biệt là các cửa hàng chuyên kinh doanh các sản phẩm Hàn Quốc. Tuy nhiên, điều này có thể khá khó khăn nếu bạn không ở gần các cửa hàng này. Bạn cũng nên kiểm tra chất lượng sản phẩm và giá cả trước khi mua để đảm bảo sự hài lòng.</p>

            <h3>Tại Việt Nam</h3>

            <p>Hiện nay, mua hàng trực tuyến đã trở nên phổ biến và tiện lợi hơn bao giờ hết. Bạn có thể mua Set quà hồng sâm Hàn Quốc từ các website uy tín như Tiki, Lazada, Shopee và tất nhiên, cả <a href="https://www.samshilla.com/">https://www.samshilla.com/</a> nữa. Khi mua hàng trực tuyến, bạn nên lưu ý đến chất lượng sản phẩm, giá cả và chính sách bảo hành của nhà cung cấp.</p>

            <p>Ngoài các website thương mại điện tử, bạn cũng có thể mua Set quà hồng sâm Hàn Quốc thông qua các trang mạng xã hội thương mại như <a href="https://www.facebook.com/itssamshilla">Facebook</a>, Instagram, Zalo, v.v. Nhiều người bán hàng trên các trang này cung cấp đa dạng sản phẩm và chế độ giao hàng linh hoạt. Tuy nhiên, bạn nên đảm bảo tính uy tín của người bán hàng trước khi quyết định mua hàng.</p>

            <p>Khi mua hồng sâm Hàn Quốc, bạn cần lưu ý chọn sản phẩm chất lượng, được nhập khẩu chính hãng và không chứa các hóa chất độc hại. Để đảm bảo chất lượng, bạn nên chọn các nhà cung cấp uy tín và có thể tra cứu thông tin trên trang web của Cục Quản lý Dược (tại Việt Nam) hoặc tìm hiểu thông tin từ các trang web uy tín.</p>

            Tại Shilla, chúng tôi cam kết cung cấp nhân sâm chất lượng tốt nhất từ Hàn Quốc cho người Việt.
          </div>
        </Container>
      </div>

      {/* <LayoutOption /> */}
    </Layout>
  );
};

export const query = graphql`
  query AllProducts {
    allProductJson {
      nodes {
        ...ProductJsonSummaryFragment
      }
    }
  }
`
export const Head = ({ data }) => {
  return (
    <>
      <title>{"Tất cả sản phẩm hồng sâm Shilla"}</title>
      <meta name="description" content="Tìm mua hồng sâm Hàn Quốc chất lượng cao tại Việt Nam với danh sách sản phẩm đa dạng và phong phú. Hồng sâm Hàn Quốc nguyên chất không chỉ mang lại nhiều giá trị dinh dưỡng mà còn là phương tiện hỗ trợ sức khỏe và làm đẹp. Mua ngay để trải nghiệm sự khác biệt!" />
    </>
  );
};

export default IndexPage;
