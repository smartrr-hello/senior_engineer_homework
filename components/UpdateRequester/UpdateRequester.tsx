import { memo } from 'react';
import { formatTimestamp } from '../../utils';
import styles from './UpdateRequester.module.scss';
import cx from 'classnames';

interface UpdateRequesterProps {
  /** The initial time this component was rendered */
  currentTime: Date
  /** A callback used to request an update from the parent.  */
  onRequestUpdate: (time: Date) => void;
  /** Flag used to indicate that the refresh icon should rotate. Default is false. */
  rotateIcon?: boolean
  /** An ID assigned to the data-testid attribute to target this component in testing. */
  dataTestid?: string;
}

function UpdateRequester({
  currentTime,
  onRequestUpdate,
  rotateIcon = false,
  dataTestid
}: UpdateRequesterProps) {
  const handleRefresh = () => {
    const newTime = new Date();
    onRequestUpdate(newTime);
  }

  return (
    <div className={styles.UpdateRequester} data-testid={dataTestid}>
      <span>
        <input id="refresh" name="refresh" type="button" onClick={handleRefresh} hidden aria-hidden />
        <div className={cx(styles.refresh, { [styles.rotate]: rotateIcon })}>
          <label htmlFor="refresh">⟳</label>
        </div>
      </span>
      <span>
      &nbsp;last Update: {currentTime && formatTimestamp(currentTime)}
      </span>
    </div>
  )

}

export default memo(UpdateRequester);
