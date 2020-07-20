import React, { useEffect } from 'react'
import Taro from '@tarojs/taro'
import { View, Canvas } from '@tarojs/components'
import './index.less'

export default function Screen () {
  useEffect(() => {
    const canvas = Taro.createSelectorQuery().select('#myCanvas')
    .fields({node: true, size: true}, function(res){
      console.log('res', res)
    }).exec()
    console.log('canvas', canvas)
  }, [])
  return (
    <View>
      <Canvas style='width: 300px; height: 300px;' className='myCanvas' canvasId='myCanvas' id='myCanvas'></Canvas>
    </View>
  )
}
