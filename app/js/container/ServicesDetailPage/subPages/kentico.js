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

class KenticoPage extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }
  
  render() {
    const { currentLanguage } = this.props;

    const data_en = (
      <View>
        <Text style={styles.title}>
          WHAT IS KENTICO?
        </Text>
        <Text style={styles.content}>
          Kentico provides comprehensive enterprise marketing solution. It is an all in one solution that allows to create websites and E-commerce, manage contents and online communities and market your product or services online. With offices located in the USA, UK, Czech Republic, Netherlands and Australia, and having over 1000 partners spread across 80 different countries, Kentico can be considered as one of the pioneers in the industry world-wide.
        </Text>
        <Text style={styles.content}>
          Kentico is the only company that provides the integrated services of ASP.NET CMS, E-commerce and internet marketing platform. This allows users to create websites efficiently in terms of time, effort and resources and improve the customer’s digital experience across various channels.
        </Text>
        <Text style={styles.content}>
          Kentico was established in 2004 and owing to very successful first year it did not require any foreign financing or loans. Kentico aims at providing remarkable e-marketing development solutions for corporate business of every size. Currently, Kentico offers services for more than 25000 websites in 100 different countries and is an approved Microsoft Gold Partner.
        </Text>
        <Text style={styles.title}>
          WHAT ARE OUR SERVICES?
        </Text>
        <View style={styles.tags}>
          <View style={styles.tag}>
            <Image source={ tag_icon } style={ styles.icon} resizeMod="contain" />
            <Text style={styles.content}>
              Kentico CMS
            </Text>
          </View>
          <Text style={styles.content}>
            Content management system in Kentico is not only limited to shortcutting the workflow for you, but it also provides you the freedom to create sites according to your desire at affordable prices.
          </Text>
          <Text style={styles.content}>
            Kentico is an integrated solution that allows you to easily create and manage your own websites. Regardless of whether the solution is in premises or on cloud, whether you need to create a website for desktop or for mobile, whether you need to manage an e-shop or an e-community, Kentico CMS provides you with a complete, flexible and robust content management system that helps you accomplish all you want.
          </Text>
          <Text style={styles.content}>
            Instead of working on the content management feature, NARD works on the technical aspect of Kentico by tailoring the dashboard to your site's needs to manage the content that you want. NARD is ready to provide its services, irrespective of the complexity, to deliver every required and desired feature at a reasonable price. We offer a highly customized and global solution to cater for the customer’s needs that ensures a consistent brand experience across various devices and channels.
          </Text>
          <Text style={styles.content}>
            With NARD, you will get creative, innovative and on time content delivery at the lowest cost!
          </Text>
          <View style={styles.tag}>
            <Image source={ tag_icon } style={ styles.icon} resizeMod="contain" />
            <Text style={styles.content}>
              Kentico Enterprise Marketing Solution (EMS) 
            </Text>
          </View>
          <Text style={styles.content}>
            With Kentico Enterprise Marketing Solution (EMS), we provide all you need to manage and follow up for your marketing campaigns and provide analysis of the websites that can be used to deliver exceptional customer experiences. This service is considered as a comprehensive marketing solution integrated with all the content management services of Kentico to organize and manage the customer’s experience by using efficient tools to create campaigns, marketing emails, forms, and newsletters.
          </Text>
          <View style={styles.tag}>
            <Image source={ tag_icon } style={ styles.icon} resizeMod="contain" />
            <Text style={styles.content}>
              Kentico Cloud Services 
            </Text>
          </View>
          <Text style={styles.content}>
            Kentico Cloud allows you to concentrate only on your application because it handles all the other functions such as security, the availability and the updates. Providing full-channel content on various devices in any format required by using REST API on any platform and with any programming language results in a highly productive and customized solution.
          </Text>
          <Text style={styles.content}>
            So, if you have a big content and haven’t got enough time to copy it manually, you can restore data by using programming interface content management applications.
          </Text>
          <Text style={styles.content}>
            Hurry up! Grow your e- business by using SDK’s software; you can also use REST API in any language. We support the most of the well-known programming languages, such as .NET, TypeScript, Java, JavaScript, PHP, Node.js, and iOS SDKs. In the future we plan to increase these languages.
          </Text>
          <Text style={styles.content}>
            Kentico Cloud is a global content delivery network that makes it organized and digitally available anywhere in the world and at any time allowing user to rapidly restore the content anywhere and at any time.
          </Text>
        </View>
        <Text style={styles.title}>
          NARD AS A STRATEGIC PARTNER WITH KENTICO:
        </Text>
        <Text style={styles.content}>
          NARD is a company specialized in designing, developing and configuring websites to be compatible for the search engine optimization, it also provides content management solutions along with other services. It was established in Kingdom of Saudi Arabia in 2009.
        </Text>
        <Text style={styles.content}>
          NARD is proud to be a Kentico partner since 2010 and is also a strategic partner in the Kingdom of Saudi Arabia, Morocco, and India. In 2011, NARD received an award for the best Health care website around the globe from Kentico for their 'University Sleep Disorders Center' site. Through its partnership with Kentico, NARD executed several projects including "Salama Cooperative Insurance Company", which won one of the best sites of Kentico in December 2017, and King Faisal Center for Research and Islamic Studies"
        </Text>
      </View>
    );

    const data_ar = (
      <View>
        <Text style={styles.title_ar}>
        ما هي كنتيكو؟
        </Text>
        <Text style={styles.content_ar}>
        تقدم كنتيكوحلول تسويقية متكاملة، فهي وجهتك الأولى لصنع مواقع الويب والمتاجر الالكترونية ومجتمعات الانترنت. حيث تعتبر كنتيكو واحدة من رواد الصناعة في جميع أنحاء العالم لوجود مكاتبها في الولايات المتحدة والمملكة المتحدة وجمهورية التشيك وهولندا واستراليا ووجود أكثر من 1000 شريك في 80 بلد مختلفة.
        </Text>
        <Text style={styles.content_ar}>
        كنتيكو هي الشركة الوحيدة المتكاملة من حيث تقديمها لخدمات ASP.NET CMS، والتجارة الإلكترونية ومنصات التسويق عبر الإنترنت التي تتيح لك الفرصة لإنشاء مواقع متطورة ولتحسين تجربة العملاء الرقمية عبر قنوات متعددة. كنتيكو توفر لك الوقت والجهد والموارد.
        </Text>
        <Text style={styles.content_ar}>
        أسست كنتيكو في عام 2004 بدون تمويل خارجي أو قروض في ذلك الوقت بسبب النجاح الواسع الذي احرزته منذ السنة الأولى من تأسيسها. تهدف كونتيكو إلى تقديم حلولٍ مذهلة في التسويق الالكتروني المتطور لجميع الشركات بمختلف أحجامها، حيث تقدمكنتيكو خدماتها الآن لأكثر من 25000 موقع في 100 دولة مختلفةوهي شريك معتمد من مايكروسوفت جولد.
        </Text>
        <Text style={styles.title_ar}>
        ما هي خدماتنا؟
        </Text>
        <View style={styles.tags}>
          <View style={styles.tag_ar}>
            <Text style={styles.content_ar}>
            كنتيكو CMS
            </Text>
            <Image source={ tag_icon } style={ styles.icon_ar} resizeMod="contain" />
          </View>
          <Text style={styles.content_ar}>
          نظام إدارة المحتوى الإلكتروني في كنتيكو لا يقتصر فقط على اختصار طريق سير العمل لديك، بل يقدم لك الخيار الأمثل الثابت بأسعار معقولة.
          </Text>
          <Text style={styles.content_ar}>
          تعمل نَرْد على إدارة التقنية، لا المحتوى من خلال ملائمة لوحة التحكم لحاجات موقعك من اجل إدارة المحتوى الذي ترغبه سواء كانت طبيعة موقعك معقدة أو بسيطة، فتقدم لك أي ميزة متطورة تريد بأسعار معقولة. نَرْد على استعداد لتقديم خدماتها لك بعيدا عن الصعوبات والتكاليف كيفما ترغب ووقتما تشاء.
          </Text>
          <Text style={styles.content_ar}>
          احصل على محتوى متميز مبتكر بأقل التكاليف!
          </Text>
          <Text style={styles.content_ar}>
          يمكنك أيضا مشاهدة المحتوى قبل نشره وبكل تأكيد سيعجبك، وكن مستعد لأن تصل إلى العالمية. نقدم تحكم مذهل من حيث احتياجات العميل لضمان انجاز المحتوى في الوقت المحدد وحسب العلامة التجارية. ونستخدم حقول التصميم المتسق المخصصة لإنشاء المستندات الخاصة بك، ويمكننا إعادة صياغة واستخدام أي تصميم أو محتوى في أي مكان آخر وفي أي وقت.التسويق عبر جميع القنوات والأجهزة من خلال الاستفادة من حلول التسويق المتكامل عبر الانترنت.
          </Text>
          <Text style={styles.content_ar}>
          كنتيكو CMS هو الحل المتكامل الذي يسمح لك بسهولة إنشاء وإدارة المواقع الخاصة بك. سواء كان on-premise أو in the cloud. وسواء كنت تقوم ببناء موقع ويب للشركة أو موقع ويب للجوال أو متجر إلكتروني أو مجتمع انترنت. فكنتيكو CMS تقدم لك نظام إدارة محتوى كامل ومرن وقوي يساعدك في إنجاز ما تريد.
          </Text>
          <View style={styles.tag_ar}>
            <Text style={styles.content_ar}>
            كنتيكو EMS
            </Text>
            <Image source={ tag_icon } style={ styles.icon_ar} resizeMod="contain" />
          </View>
          <Text style={styles.content_ar}>
          كنتيكو "Enterprise Marketing Solution" EMSنوفر لك كل ما تحتاج لإدارة وتتبع الحملات التسويقية الخاصة بك وتحليلها وتحليل مواقع الويب والتسويق عبر البريد الالكتروني، وتعتبر هذه الخدمة حلًا تسويقياً متكاملًا لإدارة تجربة العملاء من حيث توفير الأدوات اللازمة بسرعة وكفاءة لإنشاء الحملات، والنماذج، والنشرات الإخبارية، فتشمل جميع خدمات إدارة المحتوى لكنتيكو بالإضافة إلى التسويق.
          </Text>
          <View style={styles.tag_ar}>
            <Text style={styles.content_ar}>
            كنتيكو Cloud services 
            </Text>
            <Image source={ tag_icon } style={ styles.icon_ar} resizeMod="contain" />
          </View>
          <Text style={styles.content_ar}>
          كنتيكو Cloud تمنحك فرصة التركيز فقط على تطبيقك لأنها تتولى مهام الطرف الآخر والأمن والتوفر والتحديثات وما إلى ذلك، وهذا من شأنه أن يجعلك أكثر انتاجية. وتقدم محتوىً كامل القنوات إلى أجهزة متعددة في أي شكل تريد، حيث يمكنك استخدام REST API على أي منصة وبأي لغة برمجة.
          </Text>
          <Text style={styles.content_ar}>
          فإن كان لديك محتوى كبير ولا تملك الوقت لنسخه يدويا يمكنك استيراد البيانات باستخدام واجهة برمجة تطبيقات إدارة المحتوى.
          </Text>
          <Text style={styles.content_ar}>
          سارع فينمو مشروعك الالكتروني من خلال استخدام برمجيات الـ "SDKs"، ويمكنك أيضا استخدام REST API بأي لغة. حيث ندعم أشهر لغات البرمجة وأهمها NETو TypeScript و Javaو JavaScrip و PHP و Node.js وأيضا iOS SDKs كما نخطط لزيادة هذه اللغات في المستقبل القريب.
          </Text>
          <Text style={styles.content_ar}>
          تستطيع أيضا من خلال خدمات Cloud services استرداد المحتوى الخاص بك في أي وقت وبسرعة فائقة، حيث تستخدم كنتيكو Cloud شبكة عالمية لتوصيل المحتوى فتجعله منظما ومتاحا رقميا في أي مكان بالعالم وفي أي وقت.
          </Text>
        </View>
        <Text style={styles.title_ar}>
        نَرْد كشريك استراتيجي لكنتيكو:
        </Text>
        <Text style={styles.content_ar}>
        نَرْد شركة متخصصة في تصميم مواقع الإنترنت وتطويرها وتهيئة المواقع لملاءمة محركات البحث وحلول إدارة المحتوى وغيرها من الخدمات، حيث تأسست الشركة في عام 2009 ويقع مقرها الرئيسي في المملكة العربية السعودية.
        </Text>
        <Text style={styles.content_ar}>
        تفتخر نَرْد بشراكتها مع كنتيكو منذ عام2010  ،حيث تعتبر نَرْد شريك استراتيجي لكنتيكو في كل من المملكة العربية السعودية والمغرب والهند لأنها إحدى وكالات تصميم مواقع الانترنت. ففي عام 2011 فازت نَرْد بجائزة أفضل موقع رعاية صحية في العالم من شركة كنتيكو عن موقع المركز الجامعي لطب وأبحاث النوم. وبالشراكة مع كنتيكو أنجزت نَرْد بعض المشاريع مثل موقع "مركز الملك فيصل للبحوث والدراسات الإسلامية" و موقع "شركة سلامة للتأمين التعاوني" الذي حاز على أحد أفضل مواقعلكنتيكو في شهر ديسمبر 2017.
        </Text>
      </View>
    );

    return (
      <View>
        {currentLanguage == 'EN' ? data_en : data_ar }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    fontSize: 13,
    color: '#848484',
    lineHeight: 20,
    marginBottom: 20,
    fontFamily: NORMAL_FONT,
  },
  content_ar: {
    flex: 1,
    fontSize: 13,
    color: '#848484',
    lineHeight: 20,
    marginBottom: 20,
    textAlign: 'right',
    fontFamily: NORMAL_FONT,
  },
  title: {
    flex: 1,
    fontSize: 15,
    color: '#1C92D0',
    lineHeight: 20,
    marginBottom: 10,
    fontFamily: NORMAL_BOLD_FONT,
  },
  title_ar: {
    flex: 1,
    fontSize: 15,
    color: '#1C92D0',
    lineHeight: 20,
    marginBottom: 10,
    textAlign: 'right',
    fontFamily: NORMAL_BOLD_FONT,
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
}),{ })(KenticoPage);