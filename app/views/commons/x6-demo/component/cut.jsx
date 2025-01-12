import {useCallback} from 'react';
import styles from './cut.less';
export const Cut = props => {
  const {left, right = 0, max, children} = props;
  const getText = useCallback(() => {
    const len = children.length;
    const ellipsis = '...';
    let leftStr = '';
    let rightStr = '';
    if (len > max) {
      if (left && len) {
        leftStr = children.substr(0, left);
      } else {
        leftStr = children.substr(0, max);
      }
      if (right) {
        rightStr = children.substr(-right, right);
      }
      return `${leftStr}${ellipsis}${rightStr}`;
    }
    return children;
  }, [left, right, max, children]);
  return <span className={styles['no-wrap']}>{getText()}</span>;
};
