import React, { FunctionComponent } from 'react'

import { Text } from './styles'

export const TitleCard: FunctionComponent<any> = (props) =>
    <Text>
      {props.children}
    </Text>
  
