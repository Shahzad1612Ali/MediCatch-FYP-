import { View, Text,ScrollView } from 'react-native'
import React from 'react'

const Covid = () => {
  return (
       <ScrollView style={{backgroundColor:'grey'}}>
       <Text style={{color:'white',fontSize:20,margin:10}}>{'\n'}{'\t\t\t\t'}

       The COVID-19 pandemic has significantly impacted global health and daily life since its emergence. Understanding the virus, its signs, risk factors, preventive 
measures, and available resources is crucial.{'\n'}{'\n'}
<Text style={{fontWeight:'bold',fontSize:25}}>Introduction:</Text>{'\n'}{'\t\t\t\t'}

       COVID-19, caused by the novel coronavirus SARS-CoV-2, has rapidly spread worldwide, challenging healthcare systems and altering societal norms. The virus 
primarily affects the respiratory system, leading to a range of symptoms from mild flu-like conditions to severe respiratory distress.

{'\n'}{'\n'}<Text style={{fontWeight:'bold',fontSize:25}}>Prevalence:</Text>{'\n'}{'\t\t\t\t'}
       Initially identified in late 2019, COVID-19's prevalence has spanned the globe, prompting various responses and health measures. The impact and severity of 
outbreaks have varied across regions, influenced by factors such as healthcare infrastructure, public health measures, and vaccination rates.

{'\n'}{'\n'}
<Text style={{fontWeight:'bold',fontSize:25}}>Signs of COVID-19:</Text>{'\n'}{'\t\t\t\t'}

       Recognizing the signs is vital for early detection and isolation to prevent further transmission.{'\n'}
<Text style={{fontWeight:'bold'}}>Common symptoms:</Text> {'\n'}{'\t\t\t\t'}Fever, cough, and shortness of breath are the primary indicators.
{'\n'}<Text style={{fontWeight:'bold'}}>Additional symptoms:</Text> {'\n'}{'\t\t\t\t'} Loss of taste or smell, fatigue, body aches, sore throat, congestion, and gastrointestinal issues have also been reported.


{'\n'}{'\n'}<Text style={{fontWeight:'bold',fontSize:25}}>Causes of COVID-19</Text>{'\n'}{'\t\t\t\t'}
       SARS-CoV-2 is primarily transmitted through respiratory droplets when an infected person coughs, sneezes, talks, or breathes near others. Surface transmission 
is also possible through contact with contaminated surfaces.


{'\n'}{'\n'}<Text style={{fontWeight:'bold',fontSize:25}}>COVID-19 Risk Factors</Text>{'\n'}{'\t\t\t\t'}
       Several factors increase the risk of contracting and experiencing severe illness from COVID-19:

{'\n'}<Text style={{fontWeight:'bold'}}>Age: </Text> {'\n'}{'\t\t\t\t'}
       Elderly individuals and those with underlying health conditions are at higher risk.


{'\n'}<Text style={{fontWeight:'bold'}}>Health conditions: </Text> {'\n'}{'\t\t\t\t'}
       Chronic diseases such as diabetes, heart disease, and respiratory conditions elevate the risk.


{'\n'}<Text style={{fontWeight:'bold'}}>Immune system:  </Text> {'\n'}{'\t\t\t\t'}
       Weakened immune systems, as in immunocompromised individuals, can pose greater susceptibility.


{'\n'}<Text style={{fontWeight:'bold'}}>Prevention: </Text> {'\n'}{'\t\t\t\t'}
       Practicing preventive measures is key to curbing the spread.
 
{'\n'}<Text style={{fontWeight:'bold'}}>Vaccination: </Text> {'\n'}{'\t\t\t\t'}
       COVID-19 vaccines significantly reduce the severity of the illness and prevent hospitalization.

 
{'\n'}<Text style={{fontWeight:'bold'}}>Hygiene practices: </Text> {'\n'}{'\t\t\t\t'}
       Regular handwashing, wearing masks in crowded places, and sanitizing surfaces can minimize transmission.


{'\n'}<Text style={{fontWeight:'bold'}}>Social distancing: </Text> {'\n'}{'\t\t\t\t'}
       Maintaining physical distance reduces the likelihood of virus transmission.

{'\n'}<Text style={{fontWeight:'bold'}}>Ventilation: </Text> {'\n'}{'\t\t\t\t'}
       Ensuring proper ventilation in enclosed spaces aids in lowering the risk of viral spread.


{'\n'}<Text style={{fontWeight:'bold'}}>Seeking Medical Assistance:</Text> {'\n'}{'\t\t\t\t'}
       If you experience COVID-19 symptoms or are exposed to the virus, it's essential to consult a healthcare professional for guidance. Telemedicine and health apps 
can offer remote consultations and advice. Stay updated and follow guidelines provided by health authorities to protect yourself and others.
</Text>
    </ScrollView>
  )
}

export default Covid