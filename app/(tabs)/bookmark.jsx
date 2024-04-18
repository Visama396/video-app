import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Bookmark = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View>
          <Text>Bookmark</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Bookmark