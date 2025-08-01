import React from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, IMAGES, FONTS } from '../../constants/theme';
import Header from '../../layout/Header';
import { GlobalStyleSheet } from '../../constants/styleSheet';
import { useTheme } from '@react-navigation/native';
import Followbtn from '../../components/button/Followbtn';
import { useNavigation } from '@react-navigation/native';
import Sharebtn from '../../components/button/Sharebtn';

const SuggestionsData = [
    {
        id: '1',
        title: 'Alex Techie',
        image: IMAGES.storypic1,
        text: "alex_techie_2123",
        hasStory: false,
    },
    {
        id: '2',
        title: 'Lily Learns',
        image: IMAGES.storypic2,
        text: "your_lily@123",
        hasStory: true,
    },
    {
        id: '3',
        title: 'Mia Maven',
        image: IMAGES.storypic3,
        text: "mia-meaver_420",
        hasStory: false,
    },
    {
        id: '4',
        title: 'Sophia James',
        image: IMAGES.storypic4,
        text: "sophia_james",
        hasStory: true,
    },
    {
        id: '5',
        title: 'Deepesh gaur',
        image: IMAGES.storypic1,
        text: "deepesh_gaur22",
        hasStory: false,
    },
    {
        id: '6',
        title: 'Alex Techie',
        image: IMAGES.storypic4,
        text: "alex_techie_2123",
        hasStory: false,
    },
    {
        id: '7',
        title: 'Lily Learns',
        image: IMAGES.storypic2,
        text: "your_lily@123",
        hasStory: false,
    },
    {
        id: '8',
        title: 'Mia Maven',
        image: IMAGES.storypic3,
        text: "mia-meaver_420",
        hasStory: false,
    },
    {
        id: '9',
        title: 'Sophia James',
        image: IMAGES.storypic4,
        text: "sophia_james",
        hasStory: false,
    },
    {
        id: '10',
        title: 'Deepesh gaur',
        image: IMAGES.storypic1,
        text: "deepesh_gaur22",
        hasStory: false,
    },
    {
        id: '11',
        title: 'Alex Techie',
        image: IMAGES.storypic2,
        text: "alex_techie_2123",
        hasStory: true,
    },
];

const Item = ({ title, image, text, hasStory, isChecked, theme, navigation }) => {

    const [show, setshow] = React.useState(true);

    return(
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 15, marginBottom: 20 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View>
                    <TouchableOpacity
                        onPress={() => {
                            hasStory == false ?
                                navigation.navigate('AnotherProfile')
                                :
                                navigation.navigate('status', {
                                    name: title,
                                    image: image,
                                    statusData: [IMAGES.profilepic11, IMAGES.profilepic12]
                                })
                        }}
                        style={{ marginRight: 20 }}
                    >
                        {
                            hasStory == true ?
                                <View>
                                    <Image
                                        style={{ width: 50, height: 50, borderRadius: 50 }}
                                        source={image}
                                    />
                                    <Image
                                        style={{ width: 60, height: 60, position: 'absolute', bottom: -5, right: -5 }}
                                        source={IMAGES.cricle}
                                    />
                                </View>
                                :
                                <View>
                                    <Image
                                        style={{ width: 50, height: 50, borderRadius: 50 }}
                                        source={image}
                                    />
                                </View>
                        }

                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{ ...FONTS.font, ...FONTS.fontMedium, color: theme.colors.title }}>{title}</Text>
                    <Text style={{ ...FONTS.fontXs, color: theme.colors.text }}>{text}</Text>
                </View>
            </View>
            <View>
                {show ?
                    <Followbtn
                        title="Follow"
                        onPress={() => setshow(!show)}
                    />
                    :
                    <Sharebtn
                        title="Following"
                        onPress={() => setshow(!show)}
                    />
                }
            </View>
        </View>
    )
}

const Suggestions = () => {

    const theme = useTheme();
    const { colors } : {colors : any} = theme;

const navigation = useNavigation();

  return (
      <SafeAreaView style={{ backgroundColor: colors.card, flex: 1 }}>
          <Header
              title='Suggestions'
          />
          {/* <View style={{paddingHorizontal:15,paddingTop:10}}>
              <Text style={{...FONTS.fontRegular,...FONTS.h6,color:COLORS.title}}>To</Text>
          </View> */}
          <TextInput
              placeholder='Search here...'
              placeholderTextColor={colors.placeholder}
              style={[
                  GlobalStyleSheet.inputBox, {
                      backgroundColor: colors.input,
                      paddingLeft: 25,
                      marginHorizontal: 15,
                      marginTop: 20
                  },
              ]}
          />
          <KeyboardAvoidingView
          style={{flex: 1}}
          behavior={Platform.OS === 'ios' ? 'padding' : ''}
          >
            <FlatList
                showsVerticalScrollIndicator={false}
                data={SuggestionsData}
                renderItem={({ item }) =>
                    <Item
                        title={item.title}
                        image={item.image}
                        text={item.text}
                        hasStory={item.hasStory}
                        isChecked={item.isChecked}
                        theme={theme}
                        navigation={navigation}
                    />
                }
                keyExtractor={item => item.id}
            />
          </KeyboardAvoidingView>
          
      </SafeAreaView>
  )
}

export default Suggestions