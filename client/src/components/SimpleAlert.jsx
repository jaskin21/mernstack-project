import {
  CheckCircleIcon,
  ExclamationIcon,
  XCircleIcon,
  XIcon,
} from '@heroicons/react/solid';
import React from 'react';

const SimpleAlert = (props) => {
  const bgColor = (propType) => {
    // Need to set manually as tailwind will always check the whole class
    switch (propType) {
      case 'success':
        return 'bg-green-50';
      case 'danger':
        return 'bg-red-50';
      case 'alert':
      default:
        return 'bg-yellow-50';
    }
  };

  const textColor = (propType) => {
    // Need to set manually as tailwind will always check the whole class
    switch (propType) {
      case 'success':
        return 'text-green-400';
      case 'danger':
        return 'text-red-400';
      case 'alert':
      default:
        return 'text-yellow-400';
    }
  };

  const iconComponent = (propType) => {
    const defaultClass = 'h-5 w-5';

    switch (propType) {
      case 'success':
        return <CheckCircleIcon className={defaultClass} />;
      case 'danger':
        return <XCircleIcon className={defaultClass} />;
      case 'alert':
      default:
        return <ExclamationIcon className={defaultClass} />;
    }
  };

  const containerClass = () => {
    const { type } = props;

    return ['rounded-md', 'p-4', bgColor(type), textColor(type)].join(' ');
  };

  const content = () => {
    if (props.children) {
      return <div className="mt-3 text-sm">{props.children}</div>;
    }
  };

  const dismissableButton = () => {
    const className = [
      'inline-flex',
      'rounded-md',
      'p-1.5',
      'focus:outline-none',
      bgColor(props.type),
      textColor(props.type),
    ];

    return (
      <div className="ml-auto pl-3">
        <div className="-mx-1.5 -my-1.5">
          <button type="button" className={className} onClick={props.onDismiss}>
            <span className="sr-only">Dismiss</span>
            <XIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className={containerClass()}>
      <div className="flex">
        <div className="flex-shrink-0">{iconComponent(props.type)}</div>
        <div className="ml-3">
          <h3 className="text-sm font-medium">{props.title}</h3>
          {content()}
        </div>
        {props.dismissable && dismissableButton()}
      </div>
    </div>
  );
};

// Set a default props
SimpleAlert.defaultProps = {
  type: 'alert',
  dismissable: false,
};

export default SimpleAlert;
