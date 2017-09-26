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

class AnnualPage extends Component {
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
            WHAT IS A 'WEB SITE MAINTENANCE SERVICE'? 
          </Text>
          <Text style={styles.title}>
            WHO NEEDS 'WEB SITE MAINTENANCE SERVICE'?
          </Text>
          <Text style={styles.content}>
            The internet is a fast-paced environment and your client's expectations change quickly. In order to stay relevant and recent, you need to be one-step ahead of your competition. NARD helps you stay up to date through its web site maintenance services.
          </Text>
          <Text style={styles.content}>
            We help you keep your web site in great shape and running all the time. Be it technical upgrades, coding based changes, software applications related patches, module related, or even content based changes; we have a solution.
          </Text>
          <Text style={styles.content}>
            NARD offers its clients an all-inclusive web site maintenance contract that covers a wide range of modification, upgrades, and maintenance services. Text changes, picture modifications, and graphic changes, etc are just the basic things we cover. We also look into adding necessary scripts or applications along with free consultation for increasing efficiency and performance.
          </Text>
          <Text style={styles.title}>
            WHAT IS INCLUDED IN A WEB SITE MAINTENANCE CONTRACT?
          </Text>
          <Text style={styles.title}>
            Backup
          </Text>
          <Text style={styles.content}>
            There are three types of backups namely; the database backup, the e-mail backup, and the web site backup. These are usually stored in an offsite so in case of any error or problem; the data can be restored in a matter of hours.
          </Text>
          <Text style={styles.title}>
            E mail and Sub-Domains
          </Text>
          <Text style={styles.content}>
            Large business houses usually have constant movement of employees - inter departmental as well as external. Thus, adding, modifying or deleting email and sub-domains addresses is essential to give an accurate and updated information to the visitors of your company web site.
          </Text>
          <Text style={styles.title}>
            Protection of sensitive folders
          </Text>
          <Text style={styles.content}>
            While we you spend time and money for creating exceptional web sites, we ensure that they are secure and safe too. Protection of the important and data sensitive folders and listings is necessary. Using double firewall and other proprietary techniques, we can ensure the safety of any kind of important information/ data.
          </Text>
          <Text style={styles.title}>
            Creation of an FTP account
          </Text>
          <Text style={styles.content}>
            We can create or delete File Transfer Protocol (FTP) accounts for our users. The user can simply indicate the specific folders for which the FTP access is required and we offer the same and maintain the security of the site.
          </Text>
          <Text style={styles.title}>
            SSL Protection
          </Text>
          <Text style={styles.content}>
            NARD offers maintenance services for its secure ecommerce web designs as well. We provide the Secure Sockets Layer (SSL) service for any ecommerce site or any other site, based on the client's specific request.
          </Text>
          <Text style={styles.title}>
            OTHER SERVICES
          </Text>
          <Text style={styles.title}>
            Tools for Smart Business Decisions
          </Text>
          <Text style={styles.content}>
            Our unique quarterly reports allow you to make smart and information backed business decisions. We offer complete data mining and data analysis solutions for your web site. We compile usage and visitor statistics to give you a complete analysis of your web site's performance. Our lucid reports help you understand your customers better; hence, you can target and communicate accordingly.
          </Text>
          <Text style={styles.content}>
            In addition, to match the ever-changing rules of search engine rankings, your web site needs to be in tune with the updates and changes provided through a regular report about your web site that helps you keep it in line with your competitors.
          </Text>
          <Text style={styles.title}>
           Report
          </Text>
          <Text style={styles.title}>
            NARD offers you a monthly usage summary report. This will help you gauge the performance of your web site as well as identify the scope for improvement.
          </Text>
          <Text style={styles.content}>
            Based on the particular requirement of the clients, we can create tailor-made packages also.
          </Text>
          <Text style={styles.title}>
            Text Updates
          </Text>
          <Text style={styles.content}>
            Based on the search engines rankings, you may need to modify your content to suit your business and target audiences. This involves quick deletion and editing of the content. In some case, you may need to add content to an existing product or services. A web site maintenance service aids in swift execution of the same.
          </Text>
          <Text style={styles.title}>
            Streamlining
          </Text>
          <Text style={styles.content}>
            Based on your visitor counts and demographics you can re-organize your web content and structure to match the audience. It will also help you reach out to newer markets, and help you understand the market psyche better.
          </Text>
          <Text style={styles.title}>
            Picture Updates
          </Text>
          <Text style={styles.content}>
            You may need to update your web site with graphical representation for applications like - real time market updates, industry updates, new products launches, events, etc. A web site maintenance contract will help you add, edit, and even resize graphics and other modules.
          </Text>
          <Text style={styles.title}>
            Visitor Counter
          </Text>
          <Text style={styles.content}>
            Adding a visitor counter to your web pages, helps keep a tab on the number of people visiting your site as well as efficiency of your SEO-based content.
          </Text>
          <Text style={styles.title}>
            Customizing '404 Not found' page
          </Text>
          <Text style={styles.content}>
            We understand that each visitor to you site can be a potential customer and we make sure you do not miss any. We help customize any error pages with the client's logo (or any other text including Arabic).
          </Text>
          <Text style={styles.title}>
            WHY NARD FOR WEB SITE MAINTENANCE?
          </Text>
          <Text style={styles.content}>
            Our efficient teams bring with them in depth IT knowledge as well the tact for synchronizing content with visuals. We know what goes into keeping a web site 'live' at all times. We ensure that each client is personally catered to and that their web sites present the latest information in the desired formats at any given time.
          </Text>
          <Text style={styles.content}>
            NARD is among the best web site design company in Saudi Arabia because we ensure that our clients experience utmost peace-of-mind. To know more about our Web site Maintenance services, or to get a free quote, please contact us.
          </Text>
        </View>
    );
    const data_ar = (
        <View>
          <Text style={styles.title_ar}>
            ما هي «خدمة صيانة موقع إنترنت»؟ من يحتاج «خدمة صيانة موقع إنترنت»؟
          </Text>
          <Text style={styles.content_ar}>
            الإنترنت بيئة سريعة التطور وتوقعات عملائك تتغير بسرعة. لكي تظل أنت الأكثر أهمية وتحديثا تحتاج لأن تتقدم بخطوة واحدة على منافسيك. «نرد» تساعدك على أن تبقى الأكثر تحديثا من خلال الخدمات التي تقدمها لصيانة مواقع الإنترنت.
          </Text>
          <Text style={styles.content_ar}>
            نحن نساعدك في الحفاظ على موقعك على الإنترنت في شكل ممتاز وشغال في جميع الأوقات، سواء كان ذلك من خلال ترقيات تقنية أو تغييرات في الترميز أو باتشات patches مرتبطة بتطبيقات البرمجيات أو حتى تغييرات في المحتوى، نحن لدينا حل.
          </Text>
          <Text style={styles.content_ar}>
            «نرد» تقدم لعملائها عقود صيانة مواقع الإنترنت شاملة تغطي نطاقا واسعا من التعديل والترقيات وخدمات الصيانة. إن تغييرات النص وتعديلات الصور وتغييرات الرسومات وغيرها ليست سوى الأشياء الأساسية التي تغطيها خدماتنا، نحن ندرس أيضا إضافة البرامج النصية أو التطبيقات اللازمة، إضافة إلى تقديم استشارات مجانية لزيادة الكفاءة والأداء.
          </Text>
          <Text style={styles.title_ar}>
            ما محتوى عقد صيانة موقع إنترنت؟
          </Text>
          <Text style={styles.title_ar}>
            النسخ الاحتياطي
          </Text>
          <Text style={styles.content_ar}>
            هناك ثلاثة أنواع من النسخ الاحتياطية وهي: النسخة الاحتياطية لقاعدة البيانات، والنسخ الاحتياطية للبريد الإلكتروني، والنسخ الاحتياطية لموقع إنترنت. يتم تخزين هذه النسخ الاحتياطية عادة في موقع خارجي حتى يمكن استعادة البيانات في غضون ساعات في حالة حدوث أي خطأ أو مشكلة.
          </Text>
          <Text style={styles.title_ar}>
            البريد الإلكتروني والنطاقات الفرعية
          </Text>
          <Text style={styles.content_ar}>
            في الشركات التجارية الكبيرة، عادة ما تكون هناك تحركات مستمرة في الموظفين سواء بين الإدارات بعضها مع بعض أو خارجيا. ولذا فإن إضافة أو تعديل أو حذف البريد الإلكتروني وعناوين النطاقات الفرعية أمر ضروري لتوفير معلومات دقيقة ومحدثة لزوار موقع شركتك على الإنترنت.
          </Text>
          <Text style={styles.title_ar}>
            حماية المجلدات الحساسة
          </Text>
          <Text style={styles.content_ar}>
            وحيث يتكلف إنشاء مواقع إنترنت ممتازة مالا ووقتاً، فإننا نضمن أيضا أن تكون هذه المواقع آمنة ومأمونة أيضا. من الضروري حماية مجلدات وقوائم البيانات الحساسة المهمة. يمكننا أن نضمن سلامة أي نوع من المعلومات/ البيانات المهمة. باستخدام جدار حماية مزدوج والتقنيات الأخرى للحفاظ على الملكية.
          </Text>
          <Text style={styles.title_ar}>
            إنشاء حساب بروتوكول نقل الملفات FTP
          </Text>
          <Text style={styles.content_ar}>
            يمكننا إنشاء أو حذف حسابات بروتوكول نقل الملفات (FTP) لمستخدمينا. يمكن للمستخدم أن يشير ببساطة إلى المجلدات المحددة المطلوب إدخالها على بروتوكول نقل الملفات فننفذ ذلك ونحافظ على أمن الموقع.
          </Text>
          <Text style={styles.title_ar}>
            حماية تصميم المواقع SSL
          </Text>
          <Text style={styles.content_ar}>
            «نرد» تقدم أيضا خدمات صيانة لتصميماتها الآمنة لمواقع التجارة الإلكترونية. نحن نوفر المقابس الآمنة لخدمة حماية تصميم المواقع لأي موقع تجارة إلكترونية أو أي موقع آخر بناء على طلب العميل.
          </Text>
          <Text style={styles.title_ar}>
            خدمات أخرى:
          </Text>
          <Text style={styles.title_ar}>
            أدوات لاتخاذ قرارات ذكية
          </Text>
          <Text style={styles.content_ar}>
            تتيح لك تقاريرنا ربع السنوية الفريدة من نوعها اتخاذ قرارات عمل ذكية مبنية على المعلومات. نحن نقدم حلولا تامة للتنقيب واستغلال وتحليل البيانات لموقعك على الإنترنت. نحن نجمع إحصائيات الزوار والمستخدمين لنقدم لك تحليلا كاملا عن أداء موقعك على الإنترنت. تقاريرنا التفصيلية الواضحة تساعدك على فهم الزبائن بشكل أفضل، وهذا يمكنك بالتالي من استهدافهم والتواصل معهم بناء على ذلك.
          </Text>
          <Text style={styles.content_ar}>
            علاوة على ذلك، لمسايرة القواعد الدائمة التغير الخاصة بتصنيف محركات البحث، يلزم تحديث موقعك على الإنترنت لمواكبة التحديثات والتغييرات التي تقدم من خلال التقرير الذي يتم تجميعه عن موقعك على الإنترنت بصفة منتظمة، مما يساعدك على الحفاظ على موقعك على الإنترنت على مستوى مواقع منافسيك.
          </Text>
          <Text style={styles.title_ar}>
           تقرير
          </Text>
          <Text style={styles.content_ar}>
            «نرد» تقدم لك تقريرا موجزا شهريا عن الاستخدام، يساعدك هذا التقرير على قياس أداء موقعك على الإنترنت وتحديد نطاق التغييرات اللازمة للتهيئة.
          </Text>
          <Text style={styles.title_ar}>
            تحديثات النصوص
          </Text>
          <Text style={styles.content_ar}>
            استنادا إلى تصنيفات محركات البحث، قد تحتاج لتعديل المحتوى الخاص بك ليتناسب مع نشاطك التجاري والجمهور الذي تستهدفه، ويتطلب هذا التعديل حذف وتحرير المحتوى بسرعة. وقد تحتاج في بعض الحالات، لإضافة محتوى إلى منتج أو خدمات موجودة. تساعد خدمة صيانة مواقع الإنترنت في تنفيذ ذلك بسرعة.
          </Text>
          <Text style={styles.title_ar}>
            الانسيابية
          </Text>
          <Text style={styles.content_ar}>
            استنادا إلى عدد زائريك ونوعيتهم الديموغرافية يمكنك إعادة تنظيم محتوى وهيكل موقعك على الإنترنت ليتناسب مع الجمهور. وسوف يساعدك هذا أيضا على الوصول إلى أسواق جديدة وعلى فهم نفسية السوق على نحو أفضل.
          </Text>
          <Text style={styles.title_ar}>
            تحديثات الصور
          </Text>
          <Text style={styles.content_ar}>
            قد تحتاج لتحديث موقعك على الإنترنت بإضافة تمثيل رسومي لتطبيقات مثل – تحديثات واقعية للسوق وتحديثات في الصناعة وإطلاق منتجات وأحداث وما إلى ذلك. سيساعدك عقد صيانة الموقع على إضافة وتعديل وحتى تغيير حجم الرسومات والوحدات الأخرى.
          </Text>
          <Text style={styles.title_ar}>
            عداد الزوار
          </Text>
          <Text style={styles.content_ar}>
            إضافة عداد زوار إلى صفحات الإنترنت الخاصة بك يساعد على الاحتفاظ بتسجيل عدد زوار موقعك وكفاءة محتوى موقعك القائم على نظام تهيئة موقعك لملاءمة محركات البحث.
          </Text>
          <Text style={styles.title_ar}>
            تخصيص صفحة « لم يتم العثور 404»
          </Text>
          <Text style={styles.content_ar}>
            نحن ندرك أن كل زائر لموقعك يمكن أن يكون زبونا مستقبلا ونضمن عدم فقدانك لأي منهم، نحن نساعد في تخصيص أي صفحات خطأ عليها شعار العميل (أو أي نص آخر بما في ذلك النصوص باللغة العربية).
          </Text>
          <Text style={styles.title_ar}>
            لماذا «نرد» لصيانة موقع إنترنت؟
          </Text>
          <Text style={styles.content_ar}>
            فرق عملنا الأكفاء لديهم معرفة متعمقة في مجال تكنولوجيا المعلومات وفن ضبط تزامن المحتوى مع الصور. نحن نعلم ما يلزم للحفاظ على موقع إنترنت «في حالة نشاط» في جميع الأوقات. نحن نضمن الاعتناء بكل عميل على نحو شخصي، وأن يعرض موقع كل عميل أحدث المعلومات بالتنسيق المستحب في جميع الأوقات.
          </Text>
          <Text style={styles.content_ar}>
            «نرد» من بين أفضل شركات تصميم مواقع الإنترنت في المملكة العربية السعودية لأننا نضمن أن يتمتع عملاؤنا بأقصى قدر من الطمأنينة.
          </Text>
          <Text style={styles.content_ar}>
            لمعرفة المزيد عن خدماتنا لصيانة مواقع الإنترنت أو للحصول على عروض أسعار مجانية، من فضلك اتصل بنا.
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
}),{ })(AnnualPage);