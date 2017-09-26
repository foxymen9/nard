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

class MultiMediaPage extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }
  
  render() {
    const { currentLanguage } = this.props;

    const tag1 = [
      'Information About New Products',
      'Videos About Product Usage and Installations',
      'Your Infrastructure/ Facility Videos',
      'Corporate Films and Photos',
      'Extensive Catalogs',
      'Digital Versions of an Existing Print Catalog or Web Site',
      'Graphical Depiction of the Company Profile and Corporate Milestones',
      'Tutorials and Trainings',
      'Product Brochures',
      'Dealer Store Displays',
      'Sales Presentations',
      'Business Presentations',
      'Product Demonstrations, Catalogs and Specification Manuals',
      'Annual Reports',
    ];
    const tag1_ar = [
      'الدروس والتدريبات',
      'كتيبات المنتج',
      'عروض تقديمية عن مخزن الموزع',
      'عروض تقديمية عن المبيعات',
      'عروض تقديمية عن النشاط التجاري',
      'عروض تقديمية للمنتج وكتالوجات وكتيبات المواصفات',
      'تقارير سنوية',
      'معلومات عن منتجات جديدة',
      'عروض فيديو حول استخدام وتركيب المنتج والمنشآت',
      'عروض فيديو عن البنية التحتية / والتجهيزات الخاصة بك',
      'أفلام وصور الشركة',
      'كتالوجات تفصيلية',
      'إصدارات رقمية من كتالوج مطبوع موجود أو موقع إنترنت',
      'إصدارات رقمية من كتالوج مطبوع موجود أو موقع إنترنت',
    ];

    const data_en = (
        <View>
          <Text style={styles.content}>
            Businesses all over the world are constantly looking to reach out to their customers before their competitors do. In order to influence their targeted audience, businesses need to employ innovative modes of communication.
          </Text>
          <Text style={styles.content}>
            Tried and tested print advertising methods like pamphlets, brochures, direct mailers, etc simply add to the clutter and often go unnoticed. 
          </Text>
          <Text style={styles.content}>
            Multimedia CDs with smart Flash presentations, innovative applications and product demonstrations, etc are an out-of-the-box, cost effective and smart solution for new-age business communications.
          </Text>
          <Text style={styles.title}>
            BREAK THROUGH THE CLUTTER
          </Text>
          <Text style={styles.content}>
            A Multimedia CD is compact and can store a large amount of corporate information across file formats. Communicating through this digital media breaks the monotony brought in by the traditional modes of advertising and promotions. Your clients will sit up and take notice.
          </Text>
          <Text style={styles.content}>
            It is a clutter-free, lightweight, and easy to carry medium of storage. Moreover, it can standout among a host of paper-based communications used by your competitors.
          </Text>
          <Text style={styles.content}>
            You can even use other forms of digital storage like digital cards, flash drives, small sized CDs and CD cards.
          </Text>
          <Text style={styles.title}>
            COMMUNICATE THROUGH GRAPHICS
          </Text>
          <Text style={styles.content}>
            Multimedia CDs are a unique media that can store exhaustive information in an interactive and engaging manner. Hence, your business communications can be presented through a graphical user interface and a graphical or a pictorial flow of information. This will make an interesting and engaging visual for your clients. You can even use interactivity, animation, motion graphics, videos, etc.
          </Text>
          <Text style={styles.title}>
            EASY TO USE
          </Text>
          <Text style={styles.content}>
            Just as it proves to be a clutter-free option, CDs and other storage devices are also extremely user-friendly. You can use a static or dynamic platform to present the information. There is an ease of retrieval, storage, assortment and categorization. The digital media also allows for quick modifications, upgrades, and updates.
          </Text>
          <Text style={styles.title}>
            COST EFFECTIVE
          </Text>
          <Text style={styles.content}>
            Businesses know that marketing their products and services is a significant expense. Ultimate efficiency and effectiveness of every advertising campaign is of paramount importance. In such a scenario, using Multimedia CDs is an extremely cost effective and versatile option.
          </Text>
          <Text style={styles.content}>
            Drastically reduce overhead costs involved in printing, warehousing, safekeeping, and postage of heavy print materials like brochures, product catalogues, albums, etc. Also, the CD surface and cover can be used to etch, print or insert quick bits information about your company.
          </Text>
          <Text style={styles.title}>
            TARGETED APPROACH
          </Text>
          <Text style={styles.content}>
            With a multimedia CD as a mouthpiece for your business, you can ensure that unlike a mass mailing processes, the right group is targeted. You can ensure that you present the most important information to the most important prospects and clients.
          </Text>
          <Text style={styles.content}>
            A selective approach to distributing your communication also helps check copyright violations, and content theft, a problem with the web medium.
          </Text>
          <Text style={styles.title}>
            TARGETED APPROACH
          </Text>
          <Text style={styles.content}>
            With a multimedia CD as a mouthpiece for your business, you can ensure that unlike a mass mailing processes, the right group is targeted. You can ensure that you present the most important information to the most important prospects and clients.
          </Text>
          <Text style={styles.content}>
            A selective approach to distributing your communication also helps check copyright violations, and content theft, a problem with the web medium.
          </Text>
          <Text style={styles.title}>
            TA VIRTUAL SALESMAN
          </Text>
          <Text style={styles.content}>
            Multimedia storage devices use unconventional methods to generate interest in your products. These innovative media require too little space to store and invariable stay with your clients long after receiving the same.
          </Text>
          <Text style={styles.content}>
            Hence, presentation CDs act as a virtual sales person of your company by providing information about your business and your products. This also allows you to shorten your sales cycle, as all the necessary information, product specifications, catalogues, contact details, and documents are loaded in the same media.
          </Text>
          <Text style={styles.title}>
            WHAT CAN IT DO FOR YOU?
          </Text>
          <Text style={styles.content}>
            Multimedia CD-ROMs use an interactive interface. Say goodbye to passive unidirectional sales pitches and information downloads. Engage your users, lead them the information they are seeking. With higher involvement, comes higher retention, and ultimately higher recall and ease of taking action.
          </Text>
          <View style={styles.tags}>
          { tag1.map(function(item, index){
            return (
            <View style={styles.tag} key={index}>
              <Image source={ tag_icon } style={ styles.icon} resizeMod="contain" />
              <Text style={styles.content}>
                {item}
              </Text>
            </View>
            )
          })}
          </View>
          <Text style={styles.title}>
            WHY NARD FOR PRESENTATION CDS
          </Text>
          <Text style={styles.content}>
            One of the finest IT companies in Saudi Arabia, NARD understands the digital medium as well as the needs of your business communications. We can translate your thoughts to present engaging and innovative content in an attractive CD. We can guarantee that our ideas and presentations will get you the desired results.
          </Text>
          <Text style={styles.content}>
            Our teams are adept at the best of technology platforms like Action Script 3, Flash, etc for creating cutting-edge presentations. View our extensive CD presentations portfolio.
          </Text>
          <Text style={styles.content}>
            To know more about our presentation CD services, or to get a free quote, please contact us.
          </Text>
        </View>
    );

    const data_ar = (
        <View>
          <Text style={styles.content_ar}>
            تتطلع الأنشطة التجارية في جميع أنحاء العالم دائما للوصول إلى زبائنهم قبل أن يصل لهم منافسوهم. تحتاج الأنشطة التجارية لاستخدام وسائل اتصال مبتكرة من أجل التأثير على جمهورها المستهدف.
          </Text>
          <Text style={styles.content_ar}>
            طرق الاتصال المجربة والمختبرة مثل النشرات المطبوعة والكتيبات والرسائل البريدية المباشرة... إلخ، تؤدي ببساطة إلى تشويش الزبائن وغالبا ما تذهب دون أن يلاحظها أحد. ولكن الأقراص المدمجة للوسائط المتعددة مع عروض فلاش الذكية وتطبيقات مبتكرة وعروض تقديمية... وما إلى ذلك تأتي في الصميم وتعتبر طرقا فعالة التكلفة وحلولا ذكية لاتصالات الأعمال التجارية الحديثة.
          </Text>
          <Text style={styles.title_ar}>
            اختراق التشويش
          </Text>
          <Text style={styles.content_ar}>
            يمكن تخزين كمية كبيرة من معلومات الشركة في شكل ملفات على قرص مدمج للوسائط المتعددة. التواصل من خلال هذه الوسائط الرقمية يكسر الرتابة التي تحدثها الأساليب التقليدية للدعاية والترويج، وستجعل زبائنك ينتبهون ويدونون ملاحظات.
          </Text>
          <Text style={styles.content_ar}>
            كما أنها خالية من التشويش وخفيفة الوزن ووسط تخزين سهل الحمل، بالإضافة إلى قدرتها على الصمود وسط الكم الكبير من وسائل الاتصال الورقية التي يتلقاها الزبون من قبل منافسيك.
          </Text>
          <Text style={styles.content_ar}>
            يمكنك، حتى، استخدام أشكال أخرى من التخزين الرقمي مثل البطاقات الرقمية والفلاشات والأقراص المدمجة الصغيرة وبطاقات الأقراص المدمجة.
          </Text>
          <Text style={styles.title_ar}>
            التواصل من خلال الرسومات
          </Text>
          <Text style={styles.content_ar}>
            تعتبر الأقراص المدمجة للوسائط المتعددة وسطا فريدا من نوعه يمكنه تخزين معلومات كثيرة بطريقة تفاعلية وجذابة. ولهذا السبب، يمكنك عرض معلومات نشاطك التجاري من خلال واجهة مستخدم رسومية وانسياب تصويري أو بياني للمعلومات. مما سيعمل صورة مرئية مثيرة للاهتمام وجذابة لزبائنك. يمكنك حتى استخدام التفاعلية والحركة والرسوم المتحركة، وعروض فيديو... إلخ.
          </Text>
          <Text style={styles.title_ar}>
            سهولة الاستخدام
          </Text>
          <Text style={styles.content_ar}>
            مثلما أثبتت الأقراص المدمجة ووسائل التخزين الأخرى أنها خالية من التشويش، فإن استخدامها سهل للغاية، يمكنك استخدام منصة ساكنة أو متحركة لعرض المعلومات. ومن السهل استرجاع المعلومات وتخزينها وترتيبها وتصنيفها. كما تسمح وسائل الإعلام الرقمية بسرعة إجراء التعديلات والترقيات والتحديثات.
          </Text>
          <Text style={styles.title_ar}>
            فعالية التكاليف:
          </Text>
          <Text style={styles.content_ar}>
            تدرك الأنشطة التجارية أن تسويق منتجاتها وخدماتها يتكلف نفقات كبيرة. الكفاءة والفعالية النهائية اللتان تحققهما كل حملة إعلانية لهما أهمية جوهرية. في مثل هذا السيناريو، يكون استخدام الأقراص المدمجة للوسائط المتعددة خيارا فعالا للغاية من حيث التكلفة وتعدد الاستعمال.
          </Text>
          <Text style={styles.content_ar}>
            يؤدي استخدام الأقراص المدمجة إلى خفض كبير في النفقات العامة التي تصرف على الطباعة وتخزين وحفظ وإرسال مواد مطبوعة ثقيلة الوزن مثل الكتيبات وكتالوجات المنتجات والألبومات وخلافه، كما يمكن استخدام سطح القرص المدمج وغطائه لحفر أو طباعة أو إضافة بعض المعلومات عن النشاط التجاري.
          </Text>
          <Text style={styles.title_ar}>
            النهج المبني على الهدف:
          </Text>
          <Text style={styles.content_ar}>
            باستخدام القرص المدمج للوسائط المتعددة بمثابة متحدث باسم نشاطك التجاري يمكنك أن تضمن استهداف الجمهور الصحيح، بعكس ما يتم من خلال استخدام عمليات بريدية ضخمة، كما يمكنك ضمان عرض أهم المعلومات على أهم العملاء الحاليين والمحتملين مستقبلا، اتباع أسلوب انتقائي في توزيع المعلومات يساعد على مراقبة انتهاكات حقوق التأليف والنشر وانتهاكات سرقة المحتوى والتي تعتبر مشكلة مع استخدام الإنترنت.
          </Text>
          <Text style={styles.title_ar}>
            رجل مبيعات!
          </Text>
          <Text style={styles.content_ar}>
            تستخدم أجهزة تخزين الوسائط المتعددة أساليب غير تقليدية لإحداث الاهتمام بمنتجاتك. تتطلب هذه الوسائط المبتكرة مساحة صغيرة جدا للتخزين وتبقى مع عملائك لفترة طويلة بعد استلامها.
          </Text>
          <Text style={styles.content_ar}>
            لذا تعمل العروض التقديمية المخزنة على أقراص مدمجة من خلال عرضها معلومات عن نشاطك التجاري ومنتجاتك بمثابة مندوب مبيعات ظاهري لشركتك. كما يتيح لك ذلك تقصير دورة مبيعاتك، حيث يتم تحميل جميع المعلومات اللازمة ومواصفات المنتج والكتالوجات وتفاصيل الاتصال والوثائق في نفس الوسيط.
          </Text>
          <Text style={styles.title_ar}>
            ماذا يمكنها أن تفعل لك؟
          </Text>
          <Text style={styles.content_ar}>
            تستخدم مشغلات الأقراص المدمجة للوسائط المتعددة واجهة استخدام تفاعلية. لذا، قل وداعا لتحميل معلومات وصور مبيعات ولرسائل المبيعات السلبية أحادية الاتجاه. أشرك معك المستخدمين لمنتجاتك، وجههم إلى المعلومات التي يبحثون عنها. تتحقق الزيادة في الاحتفاظ بالزبائن مع زيادة المشاركة مما يؤدي في النهاية لتحقيق استجابة وسهولة في اتخاذ إجراء.
          </Text>
          <View style={styles.tags}>
          { tag1_ar.map(function(item, index){
            return (
            <View style={styles.tag_ar} key={index}>
              <Text style={styles.content_ar}>
                {item}
              </Text>
              <Image source={ tag_icon } style={ styles.icon_ar} resizeMod="contain" />
            </View>
            )
          })}
          </View>
          <Text style={styles.title_ar}>
            لماذا «نرد» للعروض التقديمية المخزنة على أقراص مدمجة:
          </Text>
          <Text style={styles.content_ar}>
            «نرد» بصفتها واحدة من أرقى شركات تكنولوجيا المعلومات في المملكة العربية السعودية تفهم الكثير عن الوسائط الرقمية فضلا عن فهمها لمتطلبات الاتصالات التي يحتاجها نشاطك التجاري. يمكننا أن نترجم أفكارك لعرض تقديمي ذي محتوى جذاب ومبتكر يشد الانتباه مخزن على قرص مدمج. نستطيع أن نضمن أن تحقق لك أفكارنا وعروضنا التقديمية النتائج المرجوة.
          </Text>
          <Text style={styles.content_ar}>
            فرق العمل في «نرد» تضم خبراء بارعين في أفضل منصات التكنولوجيا مثل أكشن سكريبت 3 Action Script 3 وفلاش Flash وغيرها، لإنشاء عروض تقديمية متطورة.
          </Text>
          <Text style={styles.content_ar}>
            يمكن الاطلاع على ملفنا الشامل عن العروض التقديمية المخزنة على الأقراص المدمجة
          </Text>
          <Text style={styles.content_ar}>
            لمعرفة المزيد عن خدماتنا في مجال العروض التقديمية المخزنة على أقراص مدمجة أو للحصول على عروض مجانية من فضلك ، اتصل بنا
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
  },
  content_ar: {
    flex: 1,
    fontSize: 13,
    color: '#848484',
    lineHeight: 20,
    marginBottom: 20,
    textAlign: 'right',
  },
  title: {
    flex: 1,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1C92D0',
    lineHeight: 20,
    marginBottom: 10,
  },
  title_ar: {
    flex: 1,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1C92D0',
    lineHeight: 20,
    marginBottom: 10,
    textAlign: 'right',
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
  currentLanguage: state.auth.currentLanguage,
}),{ })(MultiMediaPage);