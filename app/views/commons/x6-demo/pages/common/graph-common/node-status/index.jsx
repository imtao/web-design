import {CheckCircleOutlined, CloseCircleOutlined, SyncOutlined} from '@ant-design/icons';
export const NodeStatus = props => {
  const {className, status} = props;
  switch (status) {
  case 'fail':
    return (
      <div className={className}>
        <CloseCircleOutlined style={{color: '#ff4d4f'}} />
      </div>
    );
  case 'success':
  case 'upChangeSuccess': {
    const color = status === 'success' ? '#2ecc71' : '#1890ff';
    return (
      <div className={className}>
        <CheckCircleOutlined style={{color}} />
      </div>
    );
  }
  case 'running':
    return (
      <div className={className}>
        <SyncOutlined spin={true} style={{color: '#1890ff'}} />
      </div>
    );
  default:
    return null;
  }
};
