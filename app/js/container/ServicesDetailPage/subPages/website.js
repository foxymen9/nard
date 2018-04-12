'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import { connect } from 'react-redux';
const tag_icon = require('../../../../assets/imgs/services_detail/tag_icon.png');
import { NORMAL_FONT, NORMAL_BOLD_FONT } from '../../../styles/commonStyles';

class WebSitePage extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }
  
  render() {
    const { currentLanguage } = this.props;

    const data_en = (
        <View>
          <Text style={styles.content}>
            An informative, engaging, and comprehensive web site is an indispensible marketing tool for any business. Along with being attractive and easy to navigate, a web site should be able to effortlessly communicate the message and identity that the business, company, organization, or individual is trying to.
          </Text>
          <Text style={styles.title}>
            A WEB SITE FOR YOUR BUSINESS
          </Text>
          <Text style={styles.content}>
            At NARD, we offer professional web design services that specialize in creating smart, user-friendly, customized, and high quality targeted web applications that allow you to implement your online marketing strategies effectively.
          </Text>
          <Text style={styles.content}>
            We offer a unique combination of business consultation, web marketing and social media marketing strategies customized for your objectives. At NARD, we fuse creativity and technology for achieving business goals.
          </Text>
          <Text style={styles.content}>
            As a web design company from Saudi Arabia, we develop engaging web applications, not just for Arabic companies catering to local audiences but also international companies planning to set shop in the Gulf region.
          </Text>
          <Text style={styles.title}>
            CREATIVITY AT WORK
          </Text>
          <Text style={styles.content}>
            If your business demands an attractive, catchy, and vibrant web site design, turn to NARD. Our expert web designers use custom-made Flash headers, engaging web applications, and stunning graphics that highlight your products and services and ensure maximum retention.
          </Text>
          <Text style={styles.content}>
            A well-made high quality web design guarantees that your clients will not just revisit your web site but also share it with others.
          </Text>
          <Text style={styles.title}>
            BEYOND PASSIVE ADVERTISING
          </Text>
          <Text style={styles.content}>
            New age businesses need cutting-edge advertising solutions. You can no longer rely on traditional modes of advertising. In order to get a share of the clients form the virtual market, your web site design should be search engines friendly.
          </Text>
          <Text style={styles.content}>
            Search Engine Optimization : SEO friendly designs convert your web site into a business-generating tool and a marketing platform. Way beyond just a passive advertising media. Hence, it helps you reach out to even those who do not know you.
          </Text>
          <Text style={styles.content}>
            Customer Engagement Tools : Through an effective use of various tools like - social media marketing, data collection modules, forms, online promotions, newsletters, blogs, videos, other customized web applications, you can engage your customers and keep them coming back.
          </Text>
          <Text style={styles.content}>
            NARD guides clients and helps them shortlist and implement smarter tools for business. Our comprehensive web designing, web development and web maintenance solutions offer you all the services under one roof.
          </Text>
          <Text style={styles.title}>
            WHY NARD FOR WEB DESIGNING IN SAUDI ARABIA?
          </Text>
          <Text style={styles.content}>
            Reliability, dependability, an understanding of the local market, and excellent creative and technical skills is what NARD brings to you. We develop web applications from scratch; hence, you can rest assured that you will get an optimum performance and excellent results from your web campaign.
          </Text>
          <Text style={styles.content}>
            Our teams are adept at technologies based on Windows and Linux environments. We use scripts like PHP and ASP.NET and code high quality web designs using the most suitable platforms like HTML, CSS, PHP for ease of scalability, maintenance, modifications, etc.
          </Text>
          <Text style={styles.title}>
            WE FOLLOW THE WORLD STANDARD
          </Text>
          <Text style={styles.content}>
            NARD is a web design company in Saudi Arabia but we benchmark our services with the world standards. We understand that our clients outsource web-designing projects to us from around the world and hence we ensure that our web designs and web applications adhere to:
          </Text>
          <View style={styles.tags}>
            <View style={styles.tag}>
              <Image source={ tag_icon } style={ styles.icon} resizeMod="contain" />
              <Text style={styles.content}>
                The web design and coding guidelines by the W3 Consortium
              </Text>
            </View>
            <View style={styles.tag}>
              <Image source={ tag_icon } style={ styles.icon} resizeMod="contain" />
              <Text style={styles.content}>
                Search engine indexations rules
              </Text>
            </View>
            <View style={styles.tag}>
              <Image source={ tag_icon } style={ styles.icon} resizeMod="contain" />
              <Text style={styles.content}>
                Applicability across operating systems
              </Text>
            </View>
            <View style={styles.tag}>
              <Image source={ tag_icon } style={ styles.icon} resizeMod="contain" />
              <Text style={styles.content}>
                Uniformity across browser platforms
              </Text>
            </View>
            <View style={styles.tag}>
              <Image source={ tag_icon } style={ styles.icon} resizeMod="contain" />
              <Text style={styles.content}>
                International appeal and performance
              </Text>
            </View>
          </View>
          <Text style={styles.title}>
            RELIABLE WEB HOSTING SERVICES
          </Text>
          <Text style={styles.content}>
            Along with cutting-edge web designing services, NARD also offers reliable and affordable web site hosting packages. Our professional web hosting solutions are scalable and give you an excellent uptime.
          </Text>
          <Text style={styles.content}>
            So if you are looking for the best web page designing and hosting company, look no further. With the most responsive customer service, we are the most trusted web hosting company in Saudi Arabia.
          </Text>
          <Text style={styles.content}>
            View our extensive Web Designing portfolio.
          </Text>
        </View>
    );

    const data_ar = (
        <View>
          <Text style={styles.content_ar}>
            وجود موقع غني بالمعلومات وجذاب وشامل على الإنترنت يشكل أداة تسويقية لا غنى عنها لأي شركة، ولكن إضافة إلى كون الموقع جذابا وسهل التنقل فيه، ينبغي أن يكون موقع الإنترنت قادرا على أن يبلّغ بدون مجهود الرسالة والهوية التي تريد المؤسسة التجارية أو الشركة أو المنظمة أو الفرد الذي يملك هذا الموقع توصيلها.
          </Text>
          <Text style={styles.title_ar}>
            موقع على الإنترنت لنشاطك التجاري
          </Text>
          <Text style={styles.content_ar}>
            في «نرد»، نقدم خدمات حرفية لتصميم مواقع الإنترنت متخصصة في ابتكار تطبيقات إنترنت ذكية سهلة الاستخدام ومخصصة وعالية الجودة وموجهة لتحقيق الهدف منها وتتيح لك تنفيذ استراتيجياتك في التسويق عبر الإنترنت على نحو فعال.
          </Text>
          <Text style={styles.content_ar}>
            نحن نقدم مزيجا فريدا من الخدمات الاستشارية التجارية واستراتيجيات التسويق الإلكتروني وتسويق وسائل الإعلام الاجتماعية المصممة لتحقيق أهدافك. نحن في «نرد»، نصهر الابتكار والتكنولوجيا معا لتحقيق أهداف العمل.
          </Text>
          <Text style={styles.content_ar}>
            وباعتبارنا شركة لتصميم مواقع الإنترنت من المملكة العربية السعودية، نحن نطور تطبيقات إنترنت جذابة، ولا تقتصر خدماتنا على الشركات العربية التي تستهدف الجمهور المحلي، بل تشمل أيضا الشركات العالمية التي تخطط لإنشاء تجارة لها في منطقة الخليج.
          </Text>
          <Text style={styles.title_ar}>
            الإبداع في العمل
          </Text>
          <Text style={styles.content_ar}>
            إذا تطلب نشاطك التجاري موقع إنترنت ذا تصميم جذاب يشد الانتباه وينبض بالحيوية، الحل هو «نرد». خبراؤنا في تصميم مواقع الإنترنت يستخدمون فلاش هيدرز مصممة حسب الطلب وتطبيقات إنترنت جذابة وتصميمات جرافيك مذهلة تسلط الضوء على منتجاتك وخدماتك وتضمن أقصى معدلات الاحتفاظ بالزبائن.
          </Text>
          <Text style={styles.content_ar}>
            موقع الإنترنت المصمم جيدا وبجودة عالية، لن يضمن فقط عودة عملائك لزيارة موقعك ولكن سيضمن أيضا قيامهم بدعوة آخرين لزيارته.
          </Text>
          <Text style={styles.title_ar}>
            تخطي الإعلان السلبي
          </Text>
          <Text style={styles.content_ar}>
            تحتاج الشركات الحديثة إلى حلول إعلانية متطورة. لم يعد بإمكانك الاستمرار في الاعتماد على وسائل الإعلان التقليدية. للحصول على نصيب من عملاء السوق الافتراضي ينبغي أن يكون تصميم موقع الإنترنت الخاص بك سهل الوصول إليه من خلال محركات البحث.
          </Text>
          <Text style={styles.content_ar}>
            تهيئة الموقع لملاءمة محركات البحث: التصميمات السهل الوصول إليها من خلال محركات البحث (SEO) تحول موقع الإنترنت الخاص بك إلى أداة لخلق أعمال تجارية ومنصة للتسويق تتفوق كثيرا كونها مجرد وسيلة إعلام سلبية، وتساعدك على أن تصل حتى لمن لا يعرفونك.
          </Text>
          <Text style={styles.content_ar}>
            أدوات جذب الزبائن: يمكنك شغل انتباه زبائنك وجذبهم لإعادة زيارة موقعك من خلال الاستخدام الفعال لعدة أدوات مثل – التسويق الإعلامي الاجتماعي ووحدات جمع البيانات والنماذج وترويج المبيعات على الإنترنت والنشرات الإخبارية والمدونات والفيديو وغيرها من تطبيقات الإنترنت المخصصة.
          </Text>
          <Text style={styles.content_ar}>
            «نرد»، ترشد وتساعد العملاء على انتقاء وتنفيذ أدوات العمل الأكثر ذكاء. حلولنا الشاملة في تصميم المواقع وتطوير المواقع وصيانة المواقع توفر لكم جميع الخدمات تحت سقف واحد.
          </Text>
          <Text style={styles.title_ar}>
            لماذا «نرد» لتصميم المواقع في المملكة العربية السعودية؟
          </Text>
          <Text style={styles.content_ar}>
            الموثوقية والاعتمادية وفهم السوق المحلية والمهارات الممتازة الإبداعية والفنية، هو ما توفره لك «نرد». نحن نطور تطبيقات إنترنت بدءا من الصفر، ولهذا يمكنك أن تثق بأنك ستحصل على أداء أمثل ونتائج ممتازة من حملتك على شبكة الإنترنت.
          </Text>
          <Text style={styles.content_ar}>
            لدينا فريق عمل بارع في مجال التكنولوجيات القائمة على بيئات ويندوز ولينكس. نحن نستخدم برامج نصية مثل بى إتش بي PHP وآيه إس بي دوت نت ASP.NET ونصوغ تصميمات إنترنت عالية الجودة باستخدام أنسب المنصات مثل إتش تي إم إل (HTML) وسي إس إس (CSS) وبي إتش بي PHP لتسهيل تنفيذ التوسعات والصيانة والتعديلات وغيرها.
          </Text>
          <Text style={styles.title_ar}>
            نحن نتبع المقاييس العالمية:
          </Text>
          <Text style={styles.content_ar}>
            «نرد» شركة في المملكة العربية السعودية لتصميم مواقع الإنترنت، ولكننا ننفذ خدماتنا وفقا للمعايير العالمية. نحن ندرك أن عملاءنا من جميع أنحاء العالم يسندون لنا مشروعات لتصميم مواقع الإنترنت، لذا نضمن أن تتقيد تصميماتنا وتطبيقات الإنترنت الخاصة بنا بما يلي:
          </Text>
          <View style={styles.tags}>
            <View style={styles.tag}>
              <Text style={styles.content_ar}>
                المبادئ التوجيهية الخاصة بتصميم المواقع الإلكترونية والترميز الصادرة عن جمعية شبكة الإنترنت العالمية.
              </Text>
              <Image source={ tag_icon } style={ styles.icon_ar} resizeMod="contain" />
            </View>
            <View style={styles.tag_ar}>
              <Text style={styles.content_ar}>
                قواعد فهرسة (بيانات) محركات البحث.
              </Text>
              <Image source={ tag_icon } style={ styles.icon_ar} resizeMod="contain" />
            </View>
            <View style={styles.tag_ar}>
              <Text style={styles.content_ar}>
                صلاحية التطبيق عبر أنظمة التشغيل.
              </Text>
              <Image source={ tag_icon } style={ styles.icon_ar} resizeMod="contain" />
            </View>
            <View style={styles.tag_ar}>
              <Text style={styles.content_ar}>
                التماثل عبر منصات المتصفح.
              </Text>
              <Image source={ tag_icon } style={ styles.icon_ar} resizeMod="contain" />
            </View>
            <View style={styles.tag_ar}>
              <Text style={styles.content_ar}>
                الاتجاه والأداء العالمي.
              </Text>
              <Image source={ tag_icon } style={ styles.icon_ar} resizeMod="contain" />
            </View>
          </View>
          <Text style={styles.title_ar}>
            خدمات موثوق بها لاستضافة المواقع
          </Text>
          <Text style={styles.content}>
            بالإضافة للخدمات المتطورة لتصميم المواقع تقدم «نرد» حزم عروض موثوق بها بأسعار ميسرة لاستضافة المواقع. حلول استضافة المواقع التي نقدمها قابلة للتوسع وتمنحك فترة تشغيل ممتازة.
          </Text>
          <Text style={styles.content}>
            لذا، إذا كنت تبحث عن أفضل شركة لتصميم واستضافة مواقع الإنترنت لا تذهب بعيداً، نحن الأسرع في خدمة عملائنا وتلبية متطلباتهم، لذا نحن أكثر شركة موثوق بها في المملكة العربية السعودية لاستضافة مواقع الإنترنت.
          </Text>
          <Text style={styles.content}>
            يمكنك الاطلاع على ملفنا الحافل ملف تصميم مواقع الإنترنت.
          </Text>
        </View>
    );

    return (
      <View style={styles.container}>
        {currentLanguage == 'EN' ? data_en : data_ar }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    fontSize: 13,
    color: '#848484',
    lineHeight: 20,
    marginBottom: 20,
    fontFamily: NORMAL_FONT,
  },
  content_ar: {
    fontSize: 13,
    color: '#848484',
    lineHeight: 20,
    marginBottom: 20,
    textAlign: 'right',
    fontFamily: NORMAL_FONT,
  },
  title: {
    fontSize: 15,
    color: '#1C92D0',
    lineHeight: 20,
    marginBottom: 10,
    fontFamily: NORMAL_BOLD_FONT,
  },
  title_ar: {
    fontSize: 15,
    color: '#1C92D0',
    lineHeight: 20,
    marginBottom: 10,
    textAlign: 'right',
    fontFamily: NORMAL_BOLD_FONT,
  },
  tags: {
    width: '100%',
  },
  tag: {
    flexDirection: 'row',
  },
  tag_ar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  icon: {
    marginRight: 10,
    marginTop: 3,
    width: 15,
    height: 15,
  },
  icon_ar: {
    marginLeft: 10,
    marginTop: 3,
    width: 15,
    height: 15,
  }
});

export default connect(state => ({
  currentLanguage: state.language.currentLanguage,
}),{ })(WebSitePage);