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

class EcommercePage extends Component {
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
            ECOMMERCE WEB SITE DEVELOPMENT SERVICES
          </Text>
          <Text style={styles.content}>
            NARD offers affordable ecommerce based web design solutions that will become the backbone of your e-business. Only a robust, dependable, and reliable Ecommerce solution can provide the much-needed peace of mind for you and your customers while transacting online.
          </Text>
          <Text style={styles.content}>
            NARD specializes in creating affordable ecommerce web designs that integrate effortlessly with your administrative and operations backend, bringing you absolute flexibility to setup, operate, upgrade, and monitor your E-business.
          </Text>
          <Text style={styles.title}>
            We understand your Business Using our versatile ecommerce web services you can perform multiple business functions like:
          </Text>
          <View style={styles.tags}>
            <View style={styles.tag}>
              <Image source={ tag_icon } style={ styles.icon} resizeMod="contain" />
              <Text style={styles.content}>
                <Text style={{ fontFamily: NORMAL_BOLD_FONT }}>Selling Online :</Text> NARD offers an affordable account-based system allowing just about anyone with an email address to securely send and receive online payments with a credit card or a bank account.
              </Text>
            </View>
            <View style={styles.tag}>
              <Image source={ tag_icon } style={ styles.icon} resizeMod="contain" />
              <Text style={styles.content}>
                <Text style={{ fontFamily: NORMAL_BOLD_FONT }}>Manage one or more businesses :</Text>  A Business account on your ecommerce web site allows a member to make and receive secure credit card and e-wallet payments. One can not only manage a business but also send money, exchange currency, earn money through referrals and do so much more.
              </Text>
            </View>
            <View style={styles.tag}>
              <Image source={ tag_icon } style={ styles.icon} resizeMod="contain" />
              <Text style={styles.content}>
                <Text style={{ fontFamily: NORMAL_BOLD_FONT }}>Raise money :</Text> Our ecommerce web sites can be designed with a donation account. This is especially handy for a worthy cause like raising money for charity or a social cause.
              </Text>
            </View>
            <View style={styles.tag}>
              <Image source={ tag_icon } style={ styles.icon} resizeMod="contain" />
              <Text style={styles.content}>
                <Text style={{ fontFamily: NORMAL_BOLD_FONT }}>Making Payments :</Text> Stop signing cheques. The affordable ecommerce web design by NARD allows you to open a Payment account online. Simply log on and make payments in an instant!
              </Text>
            </View>
            <View style={styles.tag}>
              <Image source={ tag_icon } style={ styles.icon} resizeMod="contain" />
              <Text style={styles.content}>
                <Text style={{ fontFamily: NORMAL_BOLD_FONT }}>Banking Activities :</Text> Making deposits, withdrawing money and availing refunds is a breeze with a comprehensive ecommerce web sites design by NARD.
              </Text>
            </View>
            <View style={styles.tag}>
              <Image source={ tag_icon } style={ styles.icon} resizeMod="contain" />
              <Text style={styles.content}>
                <Text style={{ fontFamily: NORMAL_BOLD_FONT }}>Administrative Activities :</Text> Our online platforms also allow you to manage administrative operations like sending, receiving and cancelling invoices.
              </Text>
            </View>
          </View>
          <Text style={styles.title}>
            TECHNOLOGY FOR ECOMMERCE WEB SITES
          </Text>
          <Text style={styles.content}>
            A comprehensive and state-of-the-art ecommerce web sites design requires high-end technology and thorough knowledge of the latest in coding and programming techniques as well as contemporary security measures.
          </Text>
          <Text style={styles.content}>
            Along with a robust technical backend, businesses also look for custom designed frontends for their specific ecommerce web sites. Our creations offer features like:
          </Text>
          <View style={styles.tags}>
            <View style={styles.tag}>
              <Image source={ tag_icon } style={ styles.icon} resizeMod="contain" />
              <Text style={styles.content}>
                Quick account creation and addition
              </Text>
            </View>
            <View style={styles.tag}>
              <Image source={ tag_icon } style={ styles.icon} resizeMod="contain" />
              <Text style={styles.content}>
                Ease of verification
              </Text>
            </View>
            <View style={styles.tag}>
              <Image source={ tag_icon } style={ styles.icon} resizeMod="contain" />
              <Text style={styles.content}>
                Effortless integration
              </Text>
            </View>
            <View style={styles.tag}>
              <Image source={ tag_icon } style={ styles.icon} resizeMod="contain" />
              <Text style={styles.content}>
                Real time validation
              </Text>
            </View>
            <View style={styles.tag}>
              <Image source={ tag_icon } style={ styles.icon} resizeMod="contain" />
              <Text style={styles.content}>
                Complete customization
              </Text>
            </View>
            <View style={styles.tag}>
              <Image source={ tag_icon } style={ styles.icon} resizeMod="contain" />
              <Text style={styles.content}>
                Robust operations and MIS creation
              </Text>
            </View>
            <View style={styles.tag}>
              <Image source={ tag_icon } style={ styles.icon} resizeMod="contain" />
              <Text style={styles.content}>
                Managing taxes and levy
              </Text>
            </View>
            <View style={styles.tag}>
              <Image source={ tag_icon } style={ styles.icon} resizeMod="contain" />
              <Text style={styles.content}>
                Setting up payment terms
              </Text>
            </View>
            <View style={styles.tag}>
              <Image source={ tag_icon } style={ styles.icon} resizeMod="contain" />
              <Text style={styles.content}>
                Requesting and receiving payments
              </Text>
            </View>
            <View style={styles.tag}>
              <Image source={ tag_icon } style={ styles.icon} resizeMod="contain" />
              <Text style={styles.content}>
                Communicating with buyers - Automatic Emails, Emails
              </Text>
            </View>
          </View>
          <Text style={styles.title}>
            SAFE, SECURE AND SIMPLE
          </Text>
          <Text style={styles.content}>
            We understand that while transacting online, your customers expect the highest levels of security and utmost transparency. Having a very fast and responsive frontend is also the mark of an excellent ecommerce web sites design.
          </Text>
          <Text style={styles.content}>
            At NARD we spend special efforts for creating the most secure and user-friendly environment for you and your clients.
          </Text>
          <Text style={styles.title}>
            We understand your Business Using our versatile ecommerce web services you can perform multiple business functions like:
          </Text>
          <View style={styles.tags}>
            <View style={styles.tag}>
              <Image source={ tag_icon } style={ styles.icon} resizeMod="contain" />
              <Text style={styles.content}>
                Preventing Frauds and misappropriation of funds
              </Text>
            </View>
            <View style={styles.tag}>
              <Image source={ tag_icon } style={ styles.icon} resizeMod="contain" />
              <Text style={styles.content}>
                Handling disputes and resolving conflicts quickly
              </Text>
            </View>
            <View style={styles.tag}>
              <Image source={ tag_icon } style={ styles.icon} resizeMod="contain" />
              <Text style={styles.content}>
                Providing reversals and chargebacks
              </Text>
            </View>
            <View style={styles.tag}>
              <Image source={ tag_icon } style={ styles.icon} resizeMod="contain" />
              <Text style={styles.content}>
                Keeping your personal information safe and encrypted
              </Text>
            </View>
          </View>
          <Text style={styles.title}>
            EASE OF MAINTENANCE
          </Text>
          <Text style={styles.content}>
            Keeping an ecommerce web site up and running is easy with NARD. We employ the best of engineers and software personnel to construct, maintain, backup and scale your e-business web site.
          </Text>
          <Text style={styles.content}>
            As a corporate web site designing company, we understand the needs for periodically modifying, updating, and transferring data and information. Our teams work closely with you to offer the best of maintenance services that ensure faster turnaround times, excellent results and complete peace of mind.
          </Text>
          <Text style={styles.title}>
            WHY NARD FOR ECOMMERCE WEB SITES DESIGN?
          </Text>
          <Text style={styles.content}>
            We bring to you unmatched benefits and absolute customer centricity. Our ecommerce and payment gateway services are versatile and flexible. We have the best of in-house ecommerce web site designers that create cutting-edge solutions for your specific business needs.
          </Text>
          <Text style={styles.title}>
            Benefits of working with NARD
          </Text>
          <View style={styles.tags}>
            <View style={styles.tag}>
              <Image source={ tag_icon } style={ styles.icon} resizeMod="contain" />
              <Text style={styles.content}>
                Affordable Web designs
              </Text>
            </View>
            <View style={styles.tag}>
              <Image source={ tag_icon } style={ styles.icon} resizeMod="contain" />
              <Text style={styles.content}>
                Versatile payment gateways
              </Text>
            </View>
            <View style={styles.tag}>
              <Image source={ tag_icon } style={ styles.icon} resizeMod="contain" />
              <Text style={styles.content}>
                Robust Content Management System (CMS)
              </Text>
            </View>
            <View style={styles.tag}>
              <Image source={ tag_icon } style={ styles.icon} resizeMod="contain" />
              <Text style={styles.content}>
                State-of-the-art security
              </Text>
            </View>
            <View style={styles.tag}>
              <Image source={ tag_icon } style={ styles.icon} resizeMod="contain" />
              <Text style={styles.content}>
                Buyer Protection Policy to protect you from unauthorized transactions and fraud
              </Text>
            </View>
            <View style={styles.tag}>
              <Image source={ tag_icon } style={ styles.icon} resizeMod="contain" />
              <Text style={styles.content}>
                Instant payment processing
              </Text>
            </View>
            <View style={styles.tag}>
              <Image source={ tag_icon } style={ styles.icon} resizeMod="contain" />
              <Text style={styles.content}>
                Due diligence for customer details
              </Text>
            </View>
          </View>
          <Text style={styles.content}>
            View our extensive Ecommerce Web sites portfolio. To know more about our Ecommerce Web site designing services, or to get a free quote, please contact us.
          </Text>
        </View>
    );

    const data_ar = (
        <View>
          <Text style={styles.title_ar}>
            خدمات تطوير مواقع الإنترنت للتجارة الإلكترونية
          </Text>
          <Text style={styles.content_ar}>
            تقدم «نرد» حلولا بأسعار ميسرة لتصميم مواقع التجارة الإلكترونية التي ستصبح العمود الفقري لنشاطك التجاري الإلكتروني عبر الإنترنت. لا يمكن أن تتوفر الطمأنينة اللازمة لك ولزبائنك أثناء عقد الصفقات عبر شبكة الإنترنت إلا من خلال حل قوي موثوق به للتجارة الإلكترونية.
          </Text>
          <Text style={styles.content_ar}>
            «نرد» متخصصة في إنشاء مواقع تجارة الإلكترونية بأسعار ميسورة تتكامل بسهولة مع خلفيتك الإدارية والتشغيلية مما يمنحك مرونة مطلقة لإعداد وتشغيل وترقية ومراقبة أنشطتك التجارية الإلكترونية.
          </Text>
          <Text style={styles.title_ar}>
            يمكنك من أداء مهام تجارية متعددة مثل:
          </Text>
          <View style={styles.tags}>
            <View style={styles.tag_ar}>
              <Text style={styles.content_ar}>
                <Text style={{ fontFamily: NORMAL_BOLD_FONT }}>البيع عبر الإنترنت :</Text> تقدم «نرد» بأسعار ميسرة نظاما يستند على إقامة حساب إلكتروني، مما يتيح لأي فرد لديه عنوان بريد إلكتروني إرسال واستقبال مبالغ بشكل آمن عبر الإنترنت باستخدام بطاقة ائتمان أو حساب مصرفي.
              </Text>
              <Image source={ tag_icon } style={ styles.icon_ar} resizeMod="contain" />
            </View>
            <View style={styles.tag_ar}>
              <Text style={styles.content_ar}>
                <Text style={{ fontFamily: NORMAL_BOLD_FONT }}>إدارة نشاط تجاري واحد أو أكثر :</Text>  وجود حساب لنشاطك التجاري على موقعك للتجارة الإلكترونية يتيح للعضو أن يعمل ويتلقى بطاقة ائتمان ومحفظة نقود إلكترونية مؤمنتين. وفضلا عن إدارة نشاط تجاري ما، يستطيع الشخص أيضا إرسال نقود وتبديل عملات وكسب 
              </Text>
              <Image source={ tag_icon } style={ styles.icon_ar} resizeMod="contain" />
            </View>
            <View style={styles.tag_ar}>
              <Text style={styles.content_ar}>
                <Text style={{ fontFamily: NORMAL_BOLD_FONT }}>جمع أموال :</Text> مواقع التجارة الإلكترونية التي نصممها يمكن أن تشمل حسابا للتبرعات، ويتم إتاحة هذا الحساب، على وجه الخصوص، لأسباب مهمة مثل جمع التبرعات لمؤسسة خيرية أو قضية اجتماعية.
              </Text>
              <Image source={ tag_icon } style={ styles.icon_ar} resizeMod="contain" />
            </View>
            <View style={styles.tag_ar}>
              <Text style={styles.content_ar}>
                <Text style={{ fontFamily: NORMAL_BOLD_FONT }}>سداد مبالغ :</Text> توقف عن توقيع شيكات. تصميم التجارة الإلكترونية ذو السعر الميسور الذي صممته «نرد» سيتيح لك فتح حسابا للدفع على الإنترنت. ببساطة، ادخل على الحساب وادفع في لحظة!
              </Text>
              <Image source={ tag_icon } style={ styles.icon_ar} resizeMod="contain" />
            </View>
            <View style={styles.tag_ar}>
              <Text style={styles.content_ar}>
                <Text style={{ fontFamily: NORMAL_BOLD_FONT }}>الأنشطة المصرفية :</Text> تقدم «نرد» بأسعار ميسرة نظاما يستند على إقامة حساب إلكتروني، مما يتيح لأي فرد لديه عنوان بريد إلكتروني إرسال واستقبال مبالغ بشكل آمن عبر الإنترنت باستخدام بطاقة ائتمان أو حساب مصرفي.
              </Text>
              <Image source={ tag_icon } style={ styles.icon_ar} resizeMod="contain" />
            </View>
            <View style={styles.tag_ar}>
              <Text style={styles.content_ar}>
                <Text style={{ fontFamily: NORMAL_BOLD_FONT }}>الأنشطة الإدارية :</Text> كما تتيح لك منصاتنا على الإنترنت إدارة العمليات الإدارية مثل إرسال فواتير وتلقي فواتير وإلغاء الفواتير
              </Text>
              <Image source={ tag_icon } style={ styles.icon_ar} resizeMod="contain" />
            </View>
          </View>
          <Text style={styles.title_ar}>
            التكنولوجيا لمواقع التجارة الإلكترونية على شبكة الإنترنت:
          </Text>
          <Text style={styles.content_ar}>
            يتطلب تصميم مواقع انترنت شاملة وعصرية للتجارة الإلكترونية توفر تكنولوجيا نهائية عالية ومعرفة وافية بأحدث تقنيات الترميز والبرمجة وبالتدابير الأمنية المتقدمة.
          </Text>
          <Text style={styles.content_ar}>
            بالإضافة إلى الخلفية الفنية القوية، تبحث الأنشطة التجارية عن واجهات مصممة خصيصا لمواقع تجارتهم الإلكترونية على الإنترنت. وتتسم عروضنا المبتكرة بخصائص مثل:
          </Text>
          <View style={styles.tags}>
            <View style={styles.tag_ar}>
              <Text style={styles.content_ar}>
                سرعة إنشاء وإضافة حساب
              </Text>
              <Image source={ tag_icon } style={ styles.icon_ar} resizeMod="contain" />
            </View>
            <View style={styles.tag_ar}>
              <Text style={styles.content_ar}>
                سهولة التحقق
              </Text>
              <Image source={ tag_icon } style={ styles.icon_ar} resizeMod="contain" />
            </View>
            <View style={styles.tag_ar}>
              <Text style={styles.content_ar}>
                اندماج بدون جهد
              </Text>
              <Image source={ tag_icon } style={ styles.icon_ar} resizeMod="contain" />
            </View>
            <View style={styles.tag_ar}>
              <Text style={styles.content_ar}>
                اعتماد الوقت الحقيقي
              </Text>
              <Image source={ tag_icon } style={ styles.icon_ar} resizeMod="contain" />
            </View>
            <View style={styles.tag_ar}>
              <Text style={styles.content_ar}>
                تخصيص تام
              </Text>
              <Image source={ tag_icon } style={ styles.icon_ar} resizeMod="contain" />
            </View>
            <View style={styles.tag_ar}>
              <Text style={styles.content_ar}>
                عمليات قوية وإنشاء نظام إدارة معلومات (MIS)
              </Text>
              <Image source={ tag_icon } style={ styles.icon_ar} resizeMod="contain" />
            </View>
            <View style={styles.tag_ar}>
              <Text style={styles.content_ar}>
                إدارة الضرائب والمبالغ المفروضة
              </Text>
              <Image source={ tag_icon } style={ styles.icon_ar} resizeMod="contain" />
            </View>
            <View style={styles.tag_ar}>
              <Text style={styles.content_ar}>
                وضع شروط الدفع
              </Text>
              <Image source={ tag_icon } style={ styles.icon_ar} resizeMod="contain" />
            </View>
            <View style={styles.tag_ar}>
              <Text style={styles.content_ar}>
                طلب وتلقي المدفوعات
              </Text>
              <Image source={ tag_icon } style={ styles.icon_ar} resizeMod="contain" />
            </View>
            <View style={styles.tag_ar}>
              <Text style={styles.content_ar}>
                التواصل مع المشترين – رسائل بريد إلكتروني تلقائية ورسائل بريد
              </Text>
              <Image source={ tag_icon } style={ styles.icon_ar} resizeMod="contain" />
            </View>
          </View>
          <Text style={styles.title_ar}>
            إلكتروني سالمة وآمنة وبسيطة
          </Text>
          <Text style={styles.content_ar}>
            نحن نفهم أن زبائنك يتوقعون أعلى مستويات الأمن وأقصى درجات الشفافية أثناء إجراء تعاملات عبر الإنترنت، كما أن يكون لديك واجهة أمامية سريعة جدا ومتجاوبة تدل على أن تصميم موقع التجارة الإلكترونية ممتاز.
          </Text>
          <Text style={styles.content_ar}>
            في «نرد» نبذل جهودا خاصة لإنشاء بيئة أكثر أمنا وسهلة الاستخدام لك
          </Text>
          <Text style={styles.title_ar}>
            ولعملائك. نحن ننفذ تقنيات فعالة مختبرة زمنيا، من أجل:
          </Text>
          <View style={styles.tags}>
            <View style={styles.tag_ar}>
              <Text style={styles.content_ar}>
                منع عمليات الاحتيال واختلاس الأموال
              </Text>
              <Image source={ tag_icon } style={ styles.icon_ar} resizeMod="contain" />
            </View>
            <View style={styles.tag_ar}>
              <Text style={styles.content_ar}>
                التعامل مع النزاعات وتسوية المنازعات بسرعة
              </Text>
              <Image source={ tag_icon } style={ styles.icon_ar} resizeMod="contain" />
            </View>
            <View style={styles.tag_ar}>
              <Text style={styles.content_ar}>
                توفير إمكانية الإلغاء واسترداد المصاريف
              </Text>
              <Image source={ tag_icon } style={ styles.icon_ar} resizeMod="contain" />
            </View>
            <View style={styles.tag_ar}>
              <Text style={styles.content_ar}>
                حفظ المعلومات الشخصية الخاصة بك آمنة ومشفرة
              </Text>
              <Image source={ tag_icon } style={ styles.icon_ar} resizeMod="contain" />
            </View>
          </View>
          <Text style={styles.title_ar}>
            سهولة الصيانة
          </Text>
          <Text style={styles.content_ar}>
            الحفاظ على موقع للتجارة الإلكترونية شغال يعتبر مطلبا سهلا مع «نرد». نحن نوظف لدينا أفضل المهندسين والمتخصصين في البرمجيات لبناء وصيانة وحفظ نسخة احتياطية والارتقاء بموقعك للتجارة الإلكترونية.
          </Text>
          <Text style={styles.content_ar}>
            ندرك بصفتنا شركة لتصميم مواقع الإنترنت، الحاجة لتعديل وتحديث ونقل البيانات والمعلومات، بصفة دورية. تعمل فرق عملنا بالتنسيق الوثيق معكم لتقديم أفضل خدمات الصيانة لضمان تواتر أسرع لعمليات الصيانة الدورية وتحقيق نتائج ممتازة وتوفير الطمأنينة التامة.
          </Text>
          <Text style={styles.title_ar}>
            لماذا «نرد» لتصميم مواقع التجارة الإلكترونية؟
          </Text>
          <Text style={styles.content_ar}>
            لدينا بالشركة مميزات لا تضاهى وتجعلك محورا لتركيز الزبائن، خدمات المواقع التجارية وبوابات السداد التي نقدمها متنوعة ومرنة. لدينا بالشركة أفضل المصممين لمواقع التجارة الإلكترونية الذين يبتكرون حلولا متطورة لتلبية احتياجاتك.
          </Text>
          <Text style={styles.title_ar}>
            مميزات العمل مع «نرد»:
          </Text>
          <View style={styles.tags}>
            <View style={styles.tag_ar}>
              <Text style={styles.content_ar}>
                تصميمات إنترنت بأسعار معقولة
              </Text>
              <Image source={ tag_icon } style={ styles.icon_ar} resizeMod="contain" />
            </View>
            <View style={styles.tag_ar}>
              <Text style={styles.content_ar}>
                بوابات دفع متعددة :
              </Text>
              <Image source={ tag_icon } style={ styles.icon_ar} resizeMod="contain" />
            </View>
            <View style={styles.tag_ar}>
              <Text style={styles.content_ar}>
                تغطي معظم البنوك العربية
              </Text>
              <Image source={ tag_icon } style={ styles.icon_ar} resizeMod="contain" />
            </View>
            <View style={styles.tag_ar}>
              <Text style={styles.content_ar}>
                يمكن استخدام عملات متعددة
              </Text>
              <Image source={ tag_icon } style={ styles.icon_ar} resizeMod="contain" />
            </View>
            <View style={styles.tag_ar}>
              <Text style={styles.content_ar}>
                نظام قوي لإدارة المحتوى (CMS)
              </Text>
              <Image source={ tag_icon } style={ styles.icon_ar} resizeMod="contain" />
            </View>
            <View style={styles.tag_ar}>
              <Text style={styles.content_ar}>
                أحدث وسائل الأمن
              </Text>
              <Image source={ tag_icon } style={ styles.icon_ar} resizeMod="contain" />
            </View>
            <View style={styles.tag_ar}>
              <Text style={styles.content_ar}>
                سياسة حماية المشتري لحمايتك من التعاملات غير ال مصرح بها ومن الاحتيال
              </Text>
              <Image source={ tag_icon } style={ styles.icon_ar} resizeMod="contain" />
            </View>
            <View style={styles.tag_ar}>
              <Text style={styles.content_ar}>
                معالجة فورية للمدفوعات
              </Text>
              <Image source={ tag_icon } style={ styles.icon_ar} resizeMod="contain" />
            </View>
            <View style={styles.tag_ar}>
              <Text style={styles.content_ar}>
                لعناية الواجبة للحصول على البيانات التفصيلية الخاصة بالعملاء
              </Text>
              <Image source={ tag_icon } style={ styles.icon_ar} resizeMod="contain" />
            </View>
          </View>
          <Text style={styles.content_ar}>
            يمكن الاطلاع على ملفنا الشامل عن مواقع التجارة الإلكترونية
لمعرفة المزيد عن خدماتنا لتصميم مواقع التجارة الإلكترونية على شبكة الإنترنت وللحصول على عرض أسعار مجانا، من فضلك اتصل بنا
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
}),{ })(EcommercePage);