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

class LogoDesign extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }
  
  render() {
    const { currentLanguage } = this.props;

    const tag1 = [
      'Professional teams',
      'Creative minds',
      'Innovative ideas',
      'Multiple designs',
      'Winning logo designs',
      'An in-house team',
      'Complete customer satisfaction',
      'Final logo design delivery in multiple formats',
      'Quick and affordable'
    ];
    const tag1_ar = [
      'ارتياح تام للعملاء',
      'تسليم التصميم النهائي للشعار النهائي في صيغ متعددة',
      'السرعة وأسعار ميسورة',
      'تصميمات متعددة',
      'تصميمات شعارات رابحة',
      'فريق داخل الشركة',
      'فرق عمل محترفة',
      'عقول خلاقة',
      'أفكار مبتكرة',
    ];
    const tag2 = [
      {
        b: 'Creative brief', n: "Capturing the information about the business, its clients, the markets, the client's expectations, preferences and benchmarks."
      },
      {
        b: "Research", n: "Conducting thorough research for ideas, concepts, and possible themes."
      },
      {
        b: "Benchmarking", n: "Understanding the communications and positioning of the competition and benchmarking it."
      },
      {
        b: "Sketching", n: "Ideas begin to take form through sketching and outlining. Our designers often allow themselves to get detached from the project at this stage. This helps them think afresh and bring newer perspective to the drawing board."
      },
      {
        b: "Positioning", n: "Posing as a customer, we analyze and critique our own work. This helps us understand if the positioning statement is being communicated correctly."
      },
      {
        b: "Presenting and Feedback ", n: "We finally present the various logo options to the client and seek feedback and suggestions."
      },
    ];
    const tag2_ar = [
      {
        b: 'موجز إبداعي', n: "جمع المعلومات حول النشاط التجاري وعملائه والأسواق، وتوقعات العميل أفضلياته ومقاييسه"
      },
      {
        b: "البحث", n: "إجراء بحث متعمق للأفكار والمفاهيم والأشكال المحتملة"
      },
      {
        b: "القياس", n: "فهم الرسائل وتحديد موقع المنافسة والقياس عليها"
      },
      {
        b: "تخطيط", n: "تبدأ الأفكار في أن تأخذ شكلا من خلال رسم تخطيط تمهيدي. عادة، يسمح مصممونا لأنفسهم بالانفصال عن المشروع في هذه المرحلة؛ حيث يساعدهم ذلك على التفكير من جديد والخروج بمنظور أحدث إلى لوحة الرسم."
      },
      {
        b: "تحديد الموقع", n: "نتقمص شخصية الزبون ونحلل وننقد عملنا. يساعدنا ذلك على إدراك ما إذا كان الشعار يبلغ رسالة تحديد الموقع على نحو صحيح."
      },
      {
        b: "تقديم اقتراحات وتعليقات ", n: "بالشعار إلى العميل ونطلب منه موافاتنا بالملاحظات والاقتراحات"
      },
    ];

    const data_en = (
        <View>
          <Text style={styles.content}>
            A unique logo is the soul of a company's brand image. It is the single most visible and recognized asset of your company. A great logo effortlessly conveys the purpose of the business and the vision of its founders.
          </Text>
          <Text style={styles.content}>
            A logo is the representation of your company's mission through a work of art. An interesting and eye-catching logo can compel customers to seek, identify, and engage in business with you. A visually effective and distinct logo stays with your customers and aids instant recall when they are stuck in a clutter of communications from you and your competitors. In order to create visibility and credibility for a business, having a unique and catchy logo is essential.
          </Text>
          <Text style={styles.title}>
            CUSTOM LOGO DESIGNING SERVICES
          </Text>
          <Text style={styles.content}>
            Even the best product and the unique services need to be sold. And in order to sell them, customers need to know that they exist. In order to communicate your unique offerings to the world, NARD offers you free business consulting for creating and executing you marketing strategy. The importance of having a custom logo design is of course paramount.
          </Text>
          <Text style={styles.content}>
            Even the best product and the unique services need to be sold. And in order to sell them, customers need to know that they exist. In order to communicate your unique offerings to the world, NARD offers you free business consulting for creating and executing you marketing strategy. The importance of having a custom logo design is of course paramount.
          </Text>
          <Text style={styles.title}>
            LOGO DESIGNING SERVICES IN SAUDI ARABIA
          </Text>
          <Text style={styles.content}>
            Our teams appreciate and understand Arabic sentiments and values. We can identify the pulse of your customer and create designs that appeal to your desired target audience.
          </Text>
          <Text style={styles.content}>
            We understand that Arabic businesses are going global and hence there is an increased need to have company communications that have an international appeal. Hence, our custom logo design services aim is to provide complete customer satisfaction by designing logos that are tailored to portray the vision and policies of the company with an eye for an international audience.
          </Text>
          <Text style={styles.title}>
            WHY NARD FOR CUSTOM LOGO DESIGNING?
          </Text>
          <Text style={styles.content}>
            At NARD, experts commence the custom logo designing service by understanding your business, analyzing your requirements and undertaking extensive research and brainstorming to create unique themes and ideas for your logo.
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
            THE LOGO DESIGNING PROCESS
          </Text>
          <Text style={styles.content}>
            We have a well thought out, logical and structured process for understanding your business and fulfilling your logos requirements. Custom designing a unique logo requires in-depth insights about the creative, business, technical and operational points of view.
          </Text>
          <Text style={styles.title}>
            The Design Process at NARD comprises of
          </Text>
          <View style={styles.tags}>
          { tag2.map(function(item, index){
            return (
            <View style={styles.tag} key={index}>
              <Image source={ tag_icon } style={ styles.icon} resizeMod="contain" />
              <Text style={styles.content}>
                <Text style={{ fontFamily: NORMAL_BOLD_FONT }}>{item.b} :</Text> {item.n}
              </Text>
            </View>)
          })}
          </View>
          <Text style={styles.title}>
            HOW MUCH DOES IT COST?
          </Text>
          <Text style={styles.content}>
            Our customers come in all sizes, from a one-man start up to large international corporations and everything in between. As stated above, we start by taking a creative brief from the client and understanding their requirements, expectations, benchmarks, and the complexity of the idea to be communicated. Other considerations are the no. of options to be presented and the no. of revisions expected.
          </Text>
          <Text style={styles.content}>
            Keeping these in mind, our team works out the best and the most affordable cost for a custom logo design.
          </Text>
          <Text style={styles.content}>
            View our extensive Logo Designing portfolio.
          </Text>
          <Text style={styles.content}>
            To know more about our Logo designing services, or to get a free quote, please contact us.
          </Text>
        </View>
    );
     const data_ar = (
        <View>
          <Text style={styles.content_ar}>
            الشعار الفريد هو الجوهر المؤثر في صورة العلامة التجارية للشركة. وهو أحد أصول شركتك ولكنه الأصل الوحيد المعروف والأكثر وضوحاً. الشعار الممتاز ينقل بسهولة للآخرين غرض النشاط التجاري ورؤية مؤسسيه.
          </Text>
          <Text style={styles.content_ar}>
            والشعار هو تمثيل لرسالة شركتك ولكن من خلال عمل فني. الشعار المثير للاهتمام والذي يشد الأنظار يمكنه دفع الزبائن للبحث عن نشاطك التجاري وتحديد موقعك والتعامل التجاري معك. الشعار المتميز ذو الشكل الفعال يبقى عالقا في ذهن زبائنك ويسهل عليهم أن يتذكروه فورا عندما يجدون أنفسهم في حيرة وسط أكوام المراسلات التي تصلهم منك ومن منافسيك.
          </Text>
          <Text style={styles.content_ar}>
            إن وجود شعار فريد وجذاب أمر ضروري من أجل خلق رؤية ومصداقية لنشاط تجاري ما.
          </Text>
          <Text style={styles.title_ar}>
           خدمات تصميم شعار مخصص حسب الطلب
          </Text>
          <Text style={styles.content_ar}>
            تحتاج جميع المنتجات والخدمات حتى أفضلها وأكثرها تميزا لأن تباع. وبيعها يستلزم تعريف الزبائن بأنها موجودة. لإبلاغ العالم بعروضك التجارية الفريدة من نوعها تقدم لك «نرد» استشارات مجانية لإقامة وتنفيذ استراتيجية التسويق الخاصة بك. وبالطبع، وجود تصميم شعار مخصص خاص بك مهم جداً.
          </Text>
          <Text style={styles.content_ar}>
            بالنسبة لنا، عمل تصميم شعار لشركتك يعني أكثر من مجرد ابتكار رمز. نحن ندرك أن شعارك هو تعريف لك ولنشاطك التجاري ويخلق ويحدد هويتك من بين الآلاف من منافسيك الموجودين في السوق العالمية.
          </Text>
          <Text style={styles.title_ar}>
            خدمات تصميم الشعار في المملكة العربية السعودية
          </Text>
          <Text style={styles.content_ar}>
            يحترم فريق عملنا المشاعر والقيم العربية ويقدرها، ويمكننا أن نتعرف على نبض زبونك ونبتكر تصميمات ترضي جمهورك المطلوب استهدافه.
          </Text>
          <Text style={styles.content_ar}>
            نحن ندرك أن الأنشطة التجارية العربية تتوجه للانتشار العالمي مما يترتب عليه زيادة الحاجة لأن تكون مراسلاتها ذات طابع مستحب على المستوى الدولي. لذا تهدف خدماتنا لتصميم شعارات مخصصة لتوفير الارتياح التام للعميل بتصميم شعارات مخصصة لعرض رؤية وسياسات الشركة مع وضع الجمهور العالمي في الاعتبار.
          </Text>
          <Text style={styles.title_ar}>
            لماذا تلجأ إلى «نرد» لتصميم شعار مخصص؟
          </Text>
          <Text style={styles.content_ar}>
            في «نرد»، يبدأ الخبراء خدمة تصميم الشعار المخصص لنشاطك التجاري من خلال فهم نشاطك التجاري وتحليل متطلباتك وإجراء بحوث وعصف أفكار على نطاق واسع بهدف ابتكار أفكار رئيسية وأفكار فريدة من نوعها لشعارك.
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
            عملية تصميم الشعار
          </Text>
          <Text style={styles.content_ar}>
            لدينا عملية مدروسة جيدا ومنطقية ومنظمة لفهم نشاطك التجاري وتلبية متطلبات الشعار الخاص بك. إن تصميم شعار فريد يتطلب رؤى متعمقة بشأن وجهات النظر الإبداعية والتجارية والفنية والتشغيلية.
          </Text>
          <Text style={styles.content_ar}>
            تتألف عملية التصميم في «نرد» من:
          </Text>
          <View style={styles.tags}>
          { tag2_ar.map(function(item, index){
            return (
            <View style={styles.tag_ar} key={index}>
              <Text style={styles.content_ar}>
                <Text style={{ fontFamily: NORMAL_BOLD_FONT }}>{item.b} :</Text> {item.n}
              </Text>
              <Image source={ tag_icon } style={ styles.icon_ar} resizeMod="contain" />
            </View>)
          })}
          </View>
          <Text style={styles.content_ar}>
            بعد الموافقة، نقدم الشعار النهائي بصيغ متعددة لتناسب مختلف متطلبات العلامة التجارية.
          </Text>
          <Text style={styles.title_ar}>
            ما تكلفة ذلك؟
          </Text>
          <Text style={styles.content_ar}>
            تختلف أحجام عملائنا، انطلاقا من مجرد شخص واحد يبدأ عملا حتى شركات دولية كبيرة وفيما بينهما عملاء بأحجام أخرى مختلفة. نحن نبدأ كما ذكرنا أعلاه بأخذ موجز إبداعي من العميل وفهم متطلباته وتوقعاته ومقاييسه ومدى تعقيد الفكرة المطلوب توصيلها. من الاعتبارات الأخرى المؤثرة أيضا على التكلفة عدد المراجعات المتوقعة.
          </Text>
          <Text style={styles.content_ar}>
            ومع ذلك، يبذل فريقنا أقصى جهده للوصول إلى تصميم أفضل شعار مخصص بأفضل تكلفة ميسورة.
          </Text>
          <Text style={styles.content_ar}>
            يمكنك الاطلاع على ملفنا الشامل الخاص بتصميم شعار.
          </Text>
          <Text style={styles.content_ar}>
            لمعرفة المزيد عن خدماتنا لتصميم شعار أو للحصول على عروض مجانية، من فضلك اتصل بنا.
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
}),{ })(LogoDesign);