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

class SeoPage extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }
  
  render() {
    const { currentLanguage } = this.props;

    const tag1 = [
      'Relevant keywords for your business',
      'An optimum density of the keywords',
      'Presentation of the keywords in a natural manner',
    ];
    const tag1_ar = [
      'كلمات مفتاحية ذات صلة بنشاطك',
      'كثافة مثلى للكلمات المفتاحية',
      'عرض الكلمات المفتاحية بطريقة طبيعية',
    ];
    const tag2 = [
      "Building your web site's internal and incoming links",
      'Using effective keywords in your title tags like the simple HTML codes that improve search engine ranking',
      'A keyword rich content that is technically accurate and has a creative streak to it',
      'Up to 20 keywords and phrase optimizations that can be submitted to all search engines',
    ];
    const tag2_ar = [
      'ناء الروابط الداخلية والخارجية لموقعك على الإنترنت',
      'استخدام كلمات مفتاحية فعالة في واصفات العنوان الخاصة بك مثل رموز إتش تي إم إل البسيطة التي تحسن تصنيف محرك البحث',
      'محتوى غني بالكلمات المفتاحية الدقيقة من الناحية الفنية وفيه صبغة مبتكرة',
      'ما يصل إلى 20 كلمة مفتاحية وعبارة مهيأة يمكن تقديمها لجميع محركات البحث',
    ];

    const data_en = (
        <View>
          <Text style={styles.title}>
            WHAT IS SEO? WHO NEEDS SEO?
          </Text>
          <Text style={styles.content}>
            Every business exists to generate sales and earn profits. You earn more if your clients know that you are selling the things that they are looking for. If the aim of your web site is to generate business for you, then Search Engine Optimization (SEO) can do a world of good for you.
          </Text>
          <Text style={styles.content}>
            SEO helps you attract relevant traffic and generate new business. This is especially important when you are a small business, because you might be a relatively unknown entity for your target market. It is an ideal option for such businesses that do not have extensive marketing budgets.
          </Text>
          <Text style={styles.content}>
            We help you develop new businesses and aid networking and collaboration by simply increasing the visibility of your web site. Search Engine Optimization is a way to market your business to various target groups online by using relevant keywords or ad words that your prospect is likely to search for.
          </Text>
          <Text style={styles.content}>
            This mode of advertising helps you promote your product or service and reduce dependence on the sales team. You can get queries and new business inquiries right in your inbox. Also, SEO services are customized for your business hence it provides ease in establishing a niche and targeting the right audience.
          </Text>
          <Text style={styles.content}>
            <Text style={{fontWeight: 'bold'}}>For example,</Text> a buyer in Europe might not know about a business or brand name providing web site designing services in Saudi Arabia. Therefore, he or she will search for a keyword / phrase like, 'Web Designer in Saudi Arabia or Affordable Web Designing services in Saudi Arabia'. Now, the search engines will identify these phrases and list down the relevant web sites that are optimized with these keywords.
          </Text>
          <Text style={styles.content}>
            Hence, a web site company in Saudi Arabia can reach out to the buyer in Europe as it has identified these phrases and built an effective web site around it.
          </Text>
          <Text style={styles.title}>
            YOUR WEB SITE IS YOUR SHOP
          </Text>
          <Text style={styles.content}>
            In a shop, the primary aim is to have more number of visitors, the more people you can motivate to visit, and the more are the chances to sell. Your web site also functions like a shop front. If you get more visitors to your web site, there is more traffic and thus, more conversion.
          </Text>
          <Text style={styles.content}>
            Lately many companies have extensively started selling their products and services online. If you are planning to be one of those, you need to ensure that the right traffic is directed towards your web site. NARD helps you do just that. We create SEO friendly web sites that are based on the following three key factors:
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
          <Text style={styles.content}>
            We offer you free consultancy and build efficient online marketing campaigns that drive more traffic to your web site and boost the prospects of achieving a higher no. of contacts, form-fills, data base collection, and hence higher sales.
          </Text>
          <Text style={styles.title}>
            WHAT IS INCLUDED IN A SEO SERVICE?
          </Text>
          <Text style={styles.title}>
            The SEO friendly web site designing services include:
          </Text>
          <View style={styles.tags}>
          { tag2.map(function(item, index){
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
          <Text style={styles.content}>
            Based on the particular requirement of the clients, we can create tailor-made packages also.
          </Text>
          <Text style={styles.title}>
            WHY NARD FOR SEO SERVICES?
          </Text>
          <Text style={styles.content}>
            As NARD is one of the most professional web design firm in Saudi Arabia, we are a confluence of technical knowledge and business acumen. We understand the various processes involved in the process of providing SEO services. Before we take up a project, we review your requirements in depth, and offer you customized solutions.
          </Text>
          <Text style={styles.content}>
            To know more about our SEO services, or to get a free quote, please contact us.
          </Text>
        </View>
    );
    const data_ar = (
        <View>
          <Text style={styles.title_ar}>
            ما هو نظام تهيئة الموقع لملاءمة محركات البحث؟ ومن يحتاج لهذا النظام؟
          </Text>
          <Text style={styles.content_ar}>
            تنشأ جميع الأعمال التجارية لتوليد مبيعات وتحقيق أرباح. تربح أكثر إذا عرف عملاؤك أنك تبيع الأشياء التي يبحثون عنها. إذا كان الهدف من موقعك على الإنترنت هو تمكينك من توليد أعمال عبر الإنترنت، فإن نظام تهيئة الموقع لملاءمة محركات البحث يمكن أن يفيدك كثيراً.
          </Text>
          <Text style={styles.content_ar}>
            ساعدك نظام تهيئة الموقع لملاءمة محركات البحث على جذب حركة الزوار ذوي الصلة وتوليد أعمال جديدة. وهذا أمر مهم خاصة عندما يكون نشاطك التجاري صغير الحجم لأنك قد تكون كيانا غير معروف نسبيا للسوق التي تستهدفها. فهذا النظام هو الخيار الأمثل لتلك الشركات التي لا يوجد لديها ميزانيات كبيرة للتسويق.
          </Text>
          <Text style={styles.content_ar}>
            نحن نساعدك على تطوير نشاط تجاري جديد و في دعم شبكة العلاقات والتعاون بين موقعك ومحركات البحث عن طريق زيادة ظهور موقعك على الإنترنت. نظام تهيئة موقعك لملاءمة محرك البحث هو وسيلة لتسويق نشاطك التجاري لفئات مستهدفة مختلفة عبر الإنترنت باستخدام كلمات مفتاحية ذات صلة أو كلمات إعلانية من المرجح أن يبحث عنها زبونك المحتمل.
          </Text>
          <Text style={styles.content_ar}>
            يساعدك هذا النمط من الدعاية على ترويج منتجاتك أو خدماتك ويقلل الاعتماد على فريق المبيعات. يمكنك الحصول على استعلامات واستفسارات عن نشاطك التجاري الجديد في صندوق بريد الوارد الخاص بك. أيضا، كما تخصص خدمات نظام تهيئة الموقع لملاءمة محركات البحث، حسب متطلبات نشاطك التجاري مما يسهل إنشاء مركز انتقائي واستهداف الجمهور المناسب.
          </Text>
          <Text style={styles.content_ar}>
            على سبيل المثال، قد لا يعلم المشتري في أوروبا شيئا عن شركة أو علامة تجارية للشركة في المملكة العربية السعودية تقدم خدمات تصميم موقع على شبكة الإنترنت. ولذا، سيبحث عن كلمة مفتاحية/ عبارة مثل «مصمم موقع على الإنترنت في المملكة العربية السعودية أو خدمات بأسعار ميسورة لتصميم الشبكة في المملكة العربية السعودية». الآن، ستحدد محركات البحث هذه العبارات وتعرض قائمة بمواقع الإنترنت ذات الصلة والأكثر ملاءمة لهذه الكلمات المفتاحية.
          </Text>
          <Text style={styles.content_ar}>
            بالتالي، يمكن لشركة في المملكة العربية السعودية تعمل في مجال تصميم مواقع على شبكة الإنترنت الوصول إلى مشترٍ في أوروبا لأنها حددت هذه العبارات وأنشأت حولها موقعا فعالا على الإنترنت.
          </Text>
          <Text style={styles.title_ar}>
            موقعك على الشبكة هو متجرك
          </Text>
          <Text style={styles.content_ar}>
            في المتجر، يكون الهدف الأساسي هو الحصول على أكبر عدد من الزائرين فكلما زاد عدد الأفراد الذين يمكنك حفزهم على زيارة المتجر كلما زادت فرص البيع. موقعك على الإنترنت يعمل أيضا كواجهة متجر. إذا حصلت على مزيد من الزائرين لموقعك على الإنترنت فهذا يعني مزيدا من الحركة وبالتالي مزيدا من التحويلات.
          </Text>
          <Text style={styles.content_ar}>
            في الآونة الأخيرة بدأت شركات كثيرة في بيع منتجاتها وخدماتها على نطاق واسع عبر الإنترنت. إذا كنت تخطط لتكون واحدا من هؤلاء ستحتاج لأن تضمن توجيه الزائرين المناسبين إلى موقعك على الإنترنت، «نرد» تساعدك على تحقيق ذلك بالفعل. نحن ننشئ مواقع على شبكة الإنترنت سهلة الاستخدام ومهيأة لملاءمة محركات البحث مبنية على أساس العوامل الثلاثة الرئيسية التالية:
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
          <Text style={styles.content_ar}>
            نحن نقدم لك استشارات مجانية وننشئ حملات تسويق كفء عبر الإنترنت تدفع مزيدا من حركة الزوار إلى موقعك على الإنترنت، وتعزز احتمالات تحقيق عدد أكبر من الاتصالات وملء النموذج وجمع البيانات الأساسية مما يترتب عليه بالتالي تحقيق مزيد من المبيعات
          </Text>
          <Text style={styles.title_ar}>
            ما الذي تشمله خدمة تهيئة الموقع لملاءمة محركات البحث؟
          </Text>
          <Text style={styles.title_ar}>
            الخدمات سهلة الاستخدام لتهيئة الموقع لملاءمة محركات البحث، تشمل:
          </Text>
          <View style={styles.tags}>
          { tag2_ar.map(function(item, index){
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
          <Text style={styles.content_ar}>
            وبناء على متطلبات العملاء المحددة يمكننا أيضا إنشاء حزم مصممة خصيصا.
          </Text>
          <Text style={styles.title_ar}>
            لماذا تستعين بـ«نرد» لخدمات تهيئة الموقع لملاءمة محركات البحث؟
          </Text>
          <Text style={styles.content_ar}>
            حيث إن «نرد» واحدة من أكثر الشركات الاحترافية في المملكة العربية السعودية لتصميم مواقع الإنترنت، نحن نجمع بين المعرفة التقنية والفطنة التجارية. نحن نفهم العمليات المختلفة المرتبطة بعملية تقديم خدمات تهيئة المواقع لملاءمة محركات البحث. قبل أن نتناول مشروع، نستعرض متطلباتك بتعمق ونقدم لك حلولا مخصصة لتلبية هذه المتطلبات.
          </Text>
          <Text style={styles.content_ar}>
            لمعرفة المزيد عن خدماتنا لتهيئة المواقع لملاءمة محركات البحث، من فضلك اتصل بنا.
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
  currentLanguage: state.login.currentLanguage,
}),{ })(SeoPage);