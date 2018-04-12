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

import { NORMAL_FONT } from '../../../styles/commonStyles';

class ContentPage extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }
  
  render() {
    const { currentLanguage } = this.props;

    const tag1 = [
      'Establishing the communication objective',
      'Understanding the audience, their channel preference, media habits, etc',
      'Charting out the purpose of the message, the tone, use of colors, graphs, icons, etc',
      'Leading our clients towards a tangible, measurable outcome',
    ];
    const tag1_ar = [
      'تحديد الهدف من المحتوى الإعلاني',
      'فهم الجمهور والقنوات التي يفضلونها والعادات الإعلامية... إلخ',
      'وضع مخطط يحدد الغرض من الرسالة ويحدد لهجة الرسالة واستخدام الألوان والرسومات والرموز... إلخ',
      'قيادة عملائنا نحو تحقيق نتائج ملموسة وقابلة للقياس',
    ];

    const data_en = (
        <View>
          <Text style={styles.content}>
            Grammatical errors, improper word usages, erroneously placed company logo or misprinted contact details, can often lead to loss of business, embarrassment and even loss of credibility. We therefore offer complete content development services for your advertising and direct marketing exercises.
          </Text>
          <Text style={styles.content}>
            Whatever be your application, our team of writers can write engaging content for you.
          </Text>
          <Text style={styles.content}>
            A piece of communication goes through various phases that require professional inputs and design capabilities. We broadly follow the following thought flow guidelines for advertising applications:
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
            WE OFFER COMPLETE CONTENT SOLUTIONS FOR
          </Text>
          <Text style={styles.title}>
            Content for Web sites and Blogs
          </Text>
          <Text style={styles.content}>
            An attractive web design is only half the story, it is essential that we place enticing, relevant and crisp content on the web sites. We specialize in creating, editing, and updating content for your web sites and blogs, helping you keep your users engaged and inducing referrals, eventually aiding your e-marketing initiatives.
          </Text>
          <Text style={styles.content}>
            Intriguing home pages and engrossing corporate profiles, to crisp products and services copy; we write persuasive and interactive web content that your visitors will be hooked to. For existing web sites, we offer a comprehensive web-review that helps you evaluate the overall positioning, effectiveness and ease of navigation. We develop SEO-based content, dotted with the correct keywords, at the right density. Search engines lap-up web sites with relevant phrases!
          </Text>
          <Text style={styles.title}>
            Fliers and Brochures
          </Text>
          <Text style={styles.content}>
            Businesses often turn to brochures, product catalogues, and fliers for the ease of catering to a wide audience. Easy distribution, content capabilities and overall cost to conversion ratios, make them a widely employed mode for marketing communications. We offer complete conceptualization, ideation and content development services for these applications.
          </Text>
          <Text style={styles.title}>
            Presentations and Internal Communications
          </Text>
          <Text style={styles.content}>
            We offer end-to-end services for your periodic content requirements such as, internal training and knowledge series presentations, newsletters, etc. We also create smart presentations for other applications like Business plans, Marketing plans, Sales presentations, Company profiles, etc.
          </Text>
          <Text style={styles.content}>
            We carry out extensive research for your subject matter and assist you to draft, design, and animate your content. We also create graphs, spreadsheets, and charts to augment the research findings.
          </Text>
          <Text style={styles.title}>
            Direct Marketing
          </Text>
          <Text style={styles.content}>
            If you wish to employ direct marketing initiatives like direct mailers, product e-mails, catalogs, telemarketing, SMS, etc; we can develop content for these applications too. We create clutter-free creative write-ups and communications that help you achieve higher conversions.
          </Text>
          <Text style={styles.content}>
            Drastically reduce overhead costs involved in printing, warehousing, safekeeping, and postage of heavy print materials like brochures, product catalogues, albums, etc. Also, the CD surface and cover can be used to etch, print or insert quick bits information about your company.
          </Text>
          <Text style={styles.title}>
            Tag lines
          </Text>
          <Text style={styles.content}>
            Business communications are incomplete without a perfect tag line. These induce increased recognition and higher recall for your brand. We help you draft multiple options for a smart tag line, something just apt for your target audience.
          </Text>
          <Text style={styles.title}>
            Proof Reading Services
          </Text>
          <Text style={styles.content}>
            We help weed-out contextual errors, grammatical errors, inadequacy, uncommon acronyms, factual and spelling mistakes, etc. This can save you precious time and money.
          </Text>
          <Text style={styles.title}>
            Content Management System
          </Text>
          <Text style={styles.content}>
            We provide simple and smart solutions for managing your web content with the help of a Content Management System (CMS). Our well-trained teams create customized CMS for your business that will aid in integrating, categorizing, and managing your web updates.
          </Text>
          <Text style={styles.title}>
            Translation
          </Text>
          <Text style={styles.content}>
            We provide effective translation for international languages like English, French, etc. We provide creative content that is not a mere translation but carries forward the message from the original write-up, making it as effective as the original content.
          </Text>
          <Text style={styles.content}>
            View samples of our Content Writing Solutions.
          </Text>
          <Text style={styles.content}>
            To know more about our Content Writing Services, or to get a free quote, please contact us.
          </Text>
        </View>
    );
    const data_ar = (
        <View>
          <Text style={styles.content_ar}>
            الأخطاء النحوية واستخدام كلمات غير ملائمة ووضع شعار الشركة في مكان خطأ أو طبع تفاصيل اتصال خطأ غالبا ما تؤدي إلى خسارة العمل التجاري والحرج وفقدان المصداقية. لذلك نحن نقدم خدمات كاملة لتطوير المحتوى لإعلاناتك وأعمالك التسويقية المباشرة.
          </Text>
          <Text style={styles.content_ar}>
            أيا كان التطبيق الخاص بك، يمكن لفريق الكتابة العامل لدينا أن يكتب لك محتوى جذابا.
          </Text>
          <Text style={styles.content_ar}>
            تخضع عملية كتابة قطعة من محتوى إعلاني لمراحل مختلفة تتطلب مدخلات مهنية وقدرات تصميمية، نحن نتبع بوجه عام المبادئ التوجيهية التالية لانسياب الأفكار في تطبيقات الدعاية والإعلان:
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
            نحن نقدم حلولا كاملة لمحتوى:
          </Text>
          <Text style={styles.title_ar}>
            محتوى مواقع الإنترنت والمدونات
          </Text>
          <Text style={styles.content_ar}>
            لا تشكل التصميمات الجذابة لمواقع الإنترنت سوى نصف القصة فقط يلزم وضع محتوى لافت وملائم ومتجدد على مواقع الإنترنت، نحن متخصصون في إنشاء وتحرير وتحديث محتوى مدوناتكم ومواقعكم على الإنترنت لمساعدتكم على أن تحتفظ بالزوار لحثهم على الرجوع والإحالة إليهم مما يعزز في النهاية مبادراتكم التسويقية الإلكترونية
          </Text>
          <Text style={styles.content_ar}>
            نحن نكتب الصفحات الرئيسية المثيرة للاهتمام واللمحات الجذابة عن الشركة ونسخ الخدمات والمنتجات حديثة ونسخ خدمات، بحيث يكون المحتوى مقنعا وتفاعليا ويشد الزائرين لموقعك. بالنسبة لمواقع إنترنت الموجودة فعلاً، نعرض عمل مراجعة شاملة للموقع تساعدك على تقييم الموقف والفعالية وسهولة التنقل. نحن نطور محتوى قائم على أمثلة محركات البحث مطعم بالكلمات المفتاحية الصحيحة بالكثافة السليمة. تتجه محركات بسرعة لمواقع الإنترنت التي تحتوي على جمل ملائمة!
          </Text>
          <Text style={styles.title_ar}>
            منشورات وكتيبات
          </Text>
          <Text style={styles.content_ar}>
            غالبا ما تلجأ الأنشطة التجارية للكتيبات وكتالوجات المنتج والمنشورات لسهولة توجيهها لجمهور عريض. سهولة التوزيع وإمكانيات المحتوى والتكلفة الإجمالية لنسب التحويل تجعلها طريقة مستخدمة على نطاق واسع للإعلانات التسويقية. نحن نقدم تصورا مفهوميا تاما وخدمات لوضع أفكار وتطوير محتوى لهذه التطبيقات.
          </Text>
          <Text style={styles.title_ar}>
           عروض تقديمية وإعلانات داخلية
          </Text>
          <Text style={styles.content_ar}>
            نحن نقدم خدمات كاملة لمتطلباتك الدورية بشأن المحتوى مثل التدريب الداخلي وتقديم سلسلة من العروض التقديمية للمعرفة والنشرات الإخبارية وغيرها. نحن نعد أيضا عروضا تقديمية ذكية لتطبيقات أخرى مثل خطط العمل وخطط التسويق والعروض التقديمية للمبيعات ولمحات عن الشركة... إلخ.
          </Text>
          <Text style={styles.content_ar}>
            نحن نجري بحوثا واسعة النطاق بشأن موضوع العرض التقديمي الخاص بك ونساعدك في صياغة محتواه وتصميمه وحركته، كما نعد أيضا رسوما بيانية وجداول بيانات وخرائط لإظهار نتائج الأبحاث.
          </Text>
          <Text style={styles.title_ar}>
            التسويق المباشر
          </Text>
          <Text style={styles.content_ar}>
            إذا كنت ترغب في استخدام مبادرات التسويق المباشر مثل البريد المباشر والرسائل الإلكترونية لعرض المنتجات والكتالوجات والتسويق عبر الهاتف والرسائل القصيرة وما إلى ذلك، يمكننا أيضا تجهيز محتوى لهذه التطبيقات. نحن نعد إعلانات ونشرات مبتكرة خالية من التشويش التي تساعدك على تحقيق أعلى عائد.
          </Text>
          <Text style={styles.title_ar}>
            خطوط الوسم
          </Text>
          <Text style={styles.content_ar}>
            لا تكون اتصالات الأعمال مكتملة بدون خط وسم مضبوط. حيث تخلق هذه الخطوط إدراكا متزايدا واستجابة أعلى للعلامة التجارية الخاصة بك. نحن نساعدك على وضع خيارات متعددة لخط وسم ذكي محبب للجمهور الذي تستهدفه.
          </Text>
          <Text style={styles.title_ar}>
            خدمات مراجعة النص
          </Text>
          <Text style={styles.content_ar}>
            نحن نساعدك في التخلص من الأخطاء السياقية والأخطاء النحوية والأخطاء الناجمة عن استخدام كلمات غير ملائمة ومختصرات غير مألوفة والأخطاء الإملائية والأخطاء الواقعية يمكن أن يوفر ذلك عليك وقتا ثمينا ويوفر عليك مالك.
          </Text>
          <Text style={styles.title_ar}>
            نظام إدارة المحتوى
          </Text>
          <Text style={styles.content_ar}>
            نحن نقدم حلولا بسيطة وذكية لإدارة محتوى موقع الإنترنت الخاص بك بمساعدة نظام إدارة المحتوى CMS)). تنشئ فرق عملنا المدربة تدريبا جيدا نظام إدارة محتوى مخصص لنشاطك التجاري يساعد في إدماج وتصنيف وإدارة تحديثات موقع الإنترنت الخاص بك.
          </Text>
          <Text style={styles.title_ar}>
            ترجمة
          </Text>
          <Text style={styles.content_ar}>
            نحن نقدم ترجمة فعالة للغات عالمية مثل الإنجليزية والفرنسية وغيرهما. نحن نقدم محتوى إبداعيا لا مجرد ترجمة، بل يحمل رسالة الكاتب الأصلي مما يجعله فعالا بنفس القدر كما لو كان هو المحتوى الأصلي.
          </Text>
          <Text style={styles.content_ar}>
            للاطلاع على عينات من حلول كتابة المحتوى
          </Text>
          <Text style={styles.content_ar}>
            لمعرفة المزيد عن خدماتنا الخاصة بكتابة المحتوى، أو الحصول على مقايسة أسعار مجانية من فضلك اتصل بنا.
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
    fontFamily: NORMAL_FONT,
  },
  title_ar: {
    flex: 1,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1C92D0',
    lineHeight: 20,
    marginBottom: 10,
    textAlign: 'right',
    fontFamily: NORMAL_FONT,
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
}),{ })(ContentPage);