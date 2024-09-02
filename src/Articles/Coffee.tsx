import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const Coffee = () => {
  return (
    <ScrollView style={{backgroundColor:'#F6F1D5'}}>
      <Text style={{color:'black',fontSize:20,margin:10}}>
        <Text style={{fontSize:25, fontWeight:'bold'}}>Side Effects of Excessive Tea</Text>
        {'\n\t\t\t\t'}Excessive tea consumption, while generally considered safe in moderate amounts, can lead to certain side effects when consumed in high quantities. The effects may vary based on individual tolerance levels, the type of tea, and the presence of additional additives like sugar or milk. Here are some potential side effects of excessive tea intake:

<Text style={{fontSize:20,fontWeight:'bold'}}>{'\n\n'}1. Caffeine-related Issues:</Text>
{'\n\t\t\t\t'}
   - Insomnia and Disrupted Sleep: Excessive caffeine intake can lead to difficulty falling asleep or disrupted sleep patterns.
   - Anxiety and Nervousness: High caffeine levels may increase feelings of restlessness and anxiety.
   - Digestive Issues: Caffeine can stimulate bowel movements and might cause diarrhea or digestive discomfort in some individuals.

<Text style={{fontSize:20,fontWeight:'bold'}}>{'\n\n'} 2. Dehydration:</Text>{'\n\t\t\t\t'}
   - While tea is largely composed of water, excessive consumption with high caffeine content can contribute to dehydration. Caffeine is a diuretic, increasing urine production and potentially leading to fluid loss.

<Text style={{fontSize:20,fontWeight:'bold'}}>{'\n\n'}3. Iron Absorption Interference:</Text>{'\n\t\t\t\t'}
   - Tannins present in tea can hinder the absorption of non-heme iron from plant-based foods. Overconsumption might impact iron levels, particularly for individuals with low iron reserves.

<Text style={{fontSize:20,fontWeight:'bold'}}>{'\n\n'}4. Dental Health:</Text>{'\n\t\t\t\t'}
   - The tannins in tea can potentially stain teeth. Additionally, high amounts of sugar or acidic additives may contribute to dental issues.

<Text style={{fontSize:20,fontWeight:'bold'}}>{'\n\n'}5. Health Conditions and Sensitivities:</Text>{'\n\t\t\t\t'}
   - Individuals with certain health conditions or sensitivities may experience exacerbated symptoms due to excessive tea intake. For instance, those with acid reflux may find that tea aggravates their condition.

<Text style={{fontSize:20,fontWeight:'bold'}}>{'\n\n'}6. Dependence and Withdrawal Symptoms:</Text>{'\n\t\t\t\t'}
   - Regular, excessive consumption of tea can lead to caffeine dependence. Abruptly stopping or reducing intake might result in withdrawal symptoms like headaches and irritability.{'\n\n'}

   {'\t\t\t\t'}It's important to note that the impact of excessive tea intake can vary from person to person, depending on factors like tolerance, health conditions, and the specific type of tea consumed. Moderation is key to preventing these potential side effects. For most people, consuming moderate amounts of tea, typically 3-4 cups per day, is considered safe and might even offer some health benefits due to its antioxidant content.
If you're concerned about the effects of excessive tea consumption or are experiencing adverse effects, it's advisable to consult a healthcare professional for personalized guidance.
</Text>
    </ScrollView>
  )
}

export default Coffee