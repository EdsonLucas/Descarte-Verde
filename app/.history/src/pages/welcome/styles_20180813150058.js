import {general, metrics, colors} from 'styles';

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'space-around',
    paddingHorizontal: metrics.basePadding,
  },

  title: {
    ...general.title,
    fontSize: 45,
    color: colors.white,
    textAlign: 'left',
    marginBottom: 16,
    fontWeight: 'bold',
  },

  subtitle: {
    ...general.title,
    fontSize: 20,
    color: colors.white,
    backgroundColor: colors.transparent,
    textAlign: 'left',
    paddingHorizontal: 16,
  },

  text: {
    ...general.text,
    color: colors.white,
    backgroundColor: colors.transparent,
    textAlign: 'left',
    paddingHorizontal: 16,
  },

});
