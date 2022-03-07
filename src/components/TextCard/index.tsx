import React, { FunctionComponent } from 'react'

import { Text } from './styles'

export const TextCard: FunctionComponent<any> = (props) =>
    <Text>
      {props.children}
    </Text>
  
