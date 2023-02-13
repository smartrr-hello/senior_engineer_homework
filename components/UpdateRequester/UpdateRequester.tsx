import { useState } from 'react';
import styles from './UpdateRequester.module.scss';
import cx from 'classnames';

interface UpdateRequesterProps {
  /** A callback used to request an update from the parent.  */
  onRequestUpdate: (time: Date) => void;
  /** Flag used to indicate that the refresh icon should rotate. Default is false. */
  rotateIcon?: boolean
  /** An ID assigned to the data-testid attribute to target this component in testing. */
  dataTestid?: string;
}

function UpdateRequester({
  onRequestUpdate,
  rotateIcon = false,
  dataTestid
}: UpdateRequesterProps) {
  const [latestTimestamp, setLatestTimestamp] = useState<Date>(new Date())

  const handleRefresh = () => {
    const time = new Date();
    onRequestUpdate(time)

    setLatestTimestamp(time);
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
      &nbsp;last Update: {latestTimestamp.toLocaleDateString()}&nbsp;{latestTimestamp.toLocaleTimeString()}
      </span>
    </div>
  )

}

export default UpdateRequester;
