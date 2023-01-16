/* eslint-disable react/display-name */
import { FC, PropsWithChildren } from 'react'

export interface IProviderComposerProps extends PropsWithChildren {
  /**
   *  Providers list
   * */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  with: FC<any>[]
}

const ComposerFragment: FC<PropsWithChildren> = ({ children }): JSX.Element => (
  <>{children}</>
)

const providerReducer =
  (
    ParentProvider: FC<PropsWithChildren>,
    ChildProvider: FC<PropsWithChildren>
  ) =>
  ({ children }: PropsWithChildren) =>
    (
      <ParentProvider>
        <ChildProvider>{children}</ChildProvider>
      </ParentProvider>
    )

/**
 * @Component
 * @name ProviderComposer
 * @description Component that receives a list of providers and composes them to a single component.
 */
export const ProviderComposer = (props: IProviderComposerProps) => {
  const ComposedProviders = props.with.reduce(providerReducer, ComposerFragment)

  return <ComposedProviders>{props.children}</ComposedProviders>
}
